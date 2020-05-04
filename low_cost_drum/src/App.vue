<template >
  <div id="app">
  <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <div id="nav">
      <top-header></top-header>
      <!-- <router-link to ="/"> -->
    </div >
      <router-view/>
      <!-- <footer class="footer is-primary">
        <div>
          <div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia alias voluptatum possimus beatae numquam corrupti ipsa quae, fugit eius error deleniti tenetur? Quam, esse quaerat fuga quisquam quis eum?
              </p>
            </div>
          </div>
        </div>
      </footer> -->
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
  font-family: 'Raleway', sans-serif;
  font-size: 18px !important;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color:#EFEFEF !important;
}
/* .nav-background{
  background:#FF3B3F
} */
#app {
  /* display: inline-block; */
  /* position: relative; */
  font-family: 'Raleway', sans-serif;
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
