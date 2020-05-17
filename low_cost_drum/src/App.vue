<template >
  <div id="app">
  <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <div id="nav">
      <top-header></top-header>
      <!-- <router-link to ="/"> -->
    </div >
      <router-view/>
      <footer class="footer is-prim">
        <div class="contai">
          <div class="columns">
            <b-container class="bv-example-row4">
              <b-row class="text-center">
                <b-col>
                  <h2>UFRN</h2>
                  <h2>EMUFRN</h2>
                  <h2>IMD</h2>
                </b-col>
                <b-col cols="8">
                  <p>Escola de Musica da UFRN</p>
                  <p>R. Cel. João Medeiros - Lagoa Nova, Natal - RN, 59077-080</p>
                  <p>Telefone: (84) 3342-2229</p>
                  <p>Email: exemplo@ufrn.edu.br</p>
                </b-col>
                <b-col>
                  <p><b-link to="/tutorial">Projetos</b-link></p>
                  <p><b-link to="/sobre">Sobre</b-link></p>
                  <p><b-link to="/Contato">Contato</b-link></p>
                </b-col>
              </b-row>

              <b-row class="text-center">
                <b-col>Laboratorio de performance (c) copyright 2020</b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </footer>
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
footer{
  background-color: $primary !important;
  color: #FF3B3F;
}

</style>
