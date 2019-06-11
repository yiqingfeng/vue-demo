<template>
	<div class="p-friction">
		<h3 class="p-title">运动阻尼效果</h3>

		<div class="m-updown" ref="wrapper">
			<ul class="swiper-group" ref="scroller" :style="scrollerStyle">
				<li class="swiper-item" v-for="i in 15"
					@touchstart.prevent="onStart"
					@touchmove.prevent="onMove"
					@touchend.prevent="onEnd"
					@touchcancel.prevent="onEnd"
					:key="i">{{i}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			/* updown 向的运动阻尼 */
			minY: 0,
			maxY: 0,
			offsetY: 0,
			pos: {},
			duration: 0,
			cacheOffsetY: 0, // 手指偏移距离
		};
	},
	computed: {
		scrollerStyle() {
			return {
				transform: `translateY(${this.offsetY}px)`,
				'transition-duration': `${this.duration}ms`,
				'transition-timing-function': 'cubic-bezier(.165, .84, .44, 1)',
			};
		},
	},
	mounted() {
		this.$nextTick(() => {
			const wrapperHeight = this.$refs.wrapper.getBoundingClientRect().height;
			const scrollerHeight = this.$refs.scroller.getBoundingClientRect().height;
			this.wrapperHeight = wrapperHeight;
			this.minY = wrapperHeight - scrollerHeight;
		});
	},
	methods: {
		onStart(e) {
			this.duration = 0;
			// 是否为第一个触点，若是则需要重置 cacheOffsetY 值
            let isFirstTouch = true;
            Array.from(e.touches).forEach((touch) => {
				const id = touch.identifier;
				if (!this.pos[id]) {
					this.pos[id] = touch.pageY;
					return;
				}
				isFirstTouch = false;
            });
            if (isFirstTouch) {
				this.cacheOffsetY = this.offsetY;
            }
		},
		onMove(e) {
			let offset = 0;
            Array.from(e.touches).forEach((touch) => {
				const id = touch.identifier;
				if (this.pos[id]) {
					// 多根手指拖动时取拖动距离之和
					offset += Math.round(touch.pageY - this.pos[id]);
				}
            });
			// 总偏移距离
            offset = this.cacheOffsetY + offset;
            // 超出边界时增加阻尼效果
            if (offset > this.maxY) {
				this.offsetY = this.damping(offset, this.wrapperHeight);
			} else if (offset < this.minY) { // 避免抖动
				this.offsetY = this.damping(offset - this.minY, this.wrapperHeight) + this.minY;
            } else {
				this.offsetY = offset;
            }
		},
		onEnd(e) {
			Array.from(e.changedTouches).forEach((touch) => {
				const id = touch.identifier;
				if (this.pos[id]) {
					this.cacheOffsetY += Math.round(touch.pageY - this.pos[id]);
				}
            });
            // 当所有触点都离开平面
            if (!e.touches.length) {
				this.cacheOffsetY = 0;
				this.pos = {};
				this.resetPosition();
            }
		},
		// 阻尼函数
		damping(x, max) {
			let y = Math.abs(x);
			y = 0.82231 * max / (1 + 4338.47 / Math.pow(y, 1.14791)); // eslint-disable-line
			return Math.round(x < 0 ? -y : y);
		},
		// 超出边界时重置位置
		resetPosition() {
			let offsetY;
			if (this.offsetY < this.minY) {
				offsetY = this.minY;
			} else if (this.offsetY > this.maxY) {
				offsetY = this.maxY;
			}
			if (typeof offsetY !== 'undefined') {
				this.offsetY = offsetY;
				this.duration = 500;
			}
		},
	},
};
</script>

<style lang="less" scoped>
.m-updown {
	width: 600px;
	height: 800px;
	margin: 20px auto 0;
	outline: 1px dashed #ccc;
	overflow: hidden;
}
.swiper-item {
	text-align: center;
	height: 100px;
	line-height: 100px;
	&:nth-child(3n + 1) {
		background-color: aquamarine;
	}
	&:nth-child(3n + 2) {
		background-color: chocolate;
	}
	&:nth-child(3n + 3) {
		background-color: darksalmon;
	}
}
</style>
