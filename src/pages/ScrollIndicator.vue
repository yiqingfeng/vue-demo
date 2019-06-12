<template>
	<div class="p-scroll-indicator">
		<div class="scroll-indicator"></div>
		<div class="m-scroller">
			<h3 class="scroller-title">{{title}}</h3>
			<p class="scroller-ptag" v-for="(msg, index) in content" :key="index" v-html="msg"></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '滚动显示器 Scroll Indicator',
			content: [
				`传统CSS实现方法由一个名叫 Mike 的人首先提出，时间应该是16年，这个CodePen目前已经有十几万的访问量：
				<a href="https://codepen.io/MadeByMike/pen/ZOrEmr" target="_blank">CSS only scroll indicator</a>`,
				'具体原理为：在 body 标签上写一个对角的线性渐变，然后用一个白色的固定定位的浮层覆盖在上面',
				'虽然这种思路非常巧妙，但是却存在两个致命缺陷：',
				'1. 页面内容不能有背景色或背景图！',
				'2. body自身也不能有背景图！',
				'这是一个空的容器',
				'<div style="height: 600px; outline: 1px dashed aquamarine;"></div>',
				'结束空的容器',
			],
		};
	},
};
</script>

<style lang="less" scoped>
.p-scroll-indicator {
	position: relative;
}
.scroller-title {
	padding: 20px;
}
.scroller-ptag {
	padding: 20px;
	font-size: 38px;
}
.scroll-indicator {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 1;
	background: linear-gradient(to right top, #0089f2 50%, #ddd 50%) no-repeat;
    background-size: 100% calc(100% - 100vh + 3px);
	pointer-events: none; /* 使得内容能够被选中 */
    mix-blend-mode: darken; /* 避免被固定层遮罩 */
	&::after {
		content:'';
		position: fixed;
		top: 3px;
		bottom: 0;
		width: 100%;
		z-index: 1;
		background: #fff;
	}
}
</style>
