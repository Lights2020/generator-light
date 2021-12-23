<template>
    <div id="app">
        <transition name="fade">
            <keep-alive :include='includesArr' :max="10">
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            includesArr: [],
        };
    },
    created() {},
};
</script>
<style>
html,
body {
    padding: 0;
    margin: 0;
    height: 100vh;
    -webkit-touch-callout: none;
    -webkit-user-select: none;

	-webkit-text-size-adjust : 100% ;
     -moz-text-size-adjust : 100% ;
     -ms-text-size-adjust : 100% ;
     text-size-adjust : 100%;
}

* {
    padding: 0px;
    margin: 0px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3f4658;
    margin: 0 auto;
    height: 100vh;
	width: 100vw;
    overflow: auto;
}
</style>


	
