<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{height:100%;font-size:14px;}
body{position:absolute;padding:0;margin:0;width:100%;height:100%;overflow-x:hidden;font-family:"微软雅黑",Arial,Helvetica,sans-serif;}
#app {
	position:relative;
	width:750px;
	min-height:100%;
	margin:0 auto;
	border-radius: ;
	opacity:1;
	display: flex;
	background: top left/100% auto no-repeat ;
	overflow:hidden;
	z-index:1;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background-color: #2C3E50;
}
</style>
