<template>
	<div class="p-canvas">
		<h3 class="p-title">利用canvas绘制函数</h3>
		<div class="canvas-wraper">
			<canvas class="canvas canvas-1" ref="canvas">你的浏览器不支持canvas</canvas>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$nextTick(() => {
			const {
				ctx,
			} = this.getContext('canvas');

			ctx.strokeStyle = 'lightgreen';
			ctx.fillStyle = 'lightblue';

			ctx.moveTo(20, 20);
			ctx.lineTo(200, 300);
			ctx.stroke();

			ctx.fillRect(300, 20, 200, 300);

			ctx.beginPath();
			ctx.arc(700, 180, 90, 0, 2 * Math.PI);
			ctx.stroke();
		});
	},
	methods: {
		getContext(ref) {
			const canvas = this.$refs[ref];
			const style = window.getComputedStyle(canvas);
			const ctx = canvas.getContext('2d');
			const width = parseFloat(style.width);
			const height = parseFloat(style.height);
			return {
				ctx,
				width,
				height,
			};
		},
		// 绘制坐标轴 （cx, cy）为当前坐标轴的原点
		// drawLine(cx, cy, ctx) {
		// 	return {

		// 	};
		// },
		// 绘制坐标点
	},
};
</script>


<style lang="less" scoped>
	.canvas-wraper {
		width: 600px;
		height: 600px;
		margin: 20px auto 0;
	}
	.canvas {
		width: 100%;
		height: 100%;
	}
</style>
