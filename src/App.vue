<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="less">
@import url("./assets/styles/reset.less");

.p-title {
	margin-top: 40px;
	text-align: center;
}
</style>
