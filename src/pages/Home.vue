<template>
	<div class="p-home">
		<img src="../assets/logo.png">
		<div class="routers">
			<router-link
				v-for="(item, index) in list"
				:key="index" :to="item.url">{{item.name}}</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '测试',
					url: '/test',
				},
				{
					name: '运动阻尼效果',
					url: '/friction',
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
