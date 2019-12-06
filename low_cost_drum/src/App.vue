<template >
  <div id="app">

    <div id="nav">
      <top-header></top-header>
      <!-- <router-link to ="/"> -->
    </div >
      <router-view/>
  </div>
</template>
<script>
import TopHeaderVue from '@/components/TopHeader.vue'
export default {
  components: {
    'top-header': TopHeaderVue
  }
}
</script>

<style>
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color:#EFEFEF;
}
/* .nav-background{
  background:#FF3B3F
} */
#app {
  /* display: inline-block; */
  /* position: relative; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: Black;
  background-color: #EFEFEF;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:#a9a9a9;
}

</style>
