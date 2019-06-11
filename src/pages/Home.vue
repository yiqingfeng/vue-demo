<template>
	<div class="p-home">
		<img src="../assets/logo.png">
		<ol class="routers">
			<li class="router-item" v-for="(item, index) in list" :key="index" >
				<router-link :to="item.url">{{item.name}}</router-link>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '运动阻尼效果',
					url: '/friction',
				},
				{
					name: 'canvas绘制函数图形',
					url: '/canvas',
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
	.p-home {
		text-align: center;
	}
</style>
