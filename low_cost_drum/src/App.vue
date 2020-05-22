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
          <div class="espaçamento"></div>
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
                  <p>  R. Cel. João Medeiros - Lagoa Nova, Natal - RN, 59077-080</p>
                  <p> <fa-icon :icon="['fas','phone']" size="1x" /> Telefone: (84) 3342-2229</p>
                  <p> <fa-icon :icon="['fas','envelope']" size="1x" /> Email: exemplo@ufrn.edu.br</p>
                </b-col>
                <b-col class="links">
                  <p><b-link to="/tutorial">Projetos</b-link></p>
                  <p><b-link to="/sobre">Sobre</b-link></p>
                  <p><b-link to="/Contato">Contato</b-link></p>
                </b-col>
              </b-row>

              <b-row class="text-center">
                <b-col>Laboratorio de performance <br/>(c) copyright 2020</b-col>
              </b-row>
            </b-container>
          </div>
          <div class="espac2"></div>
        </div>
      </footer>
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
.espaçamento{
  height: 40px;
}
.espac2{
  height: 10x;
}
.links{
  padding-top: 10px;
  line-height: 2.0;
}
footer{
  background-color: #d3d3d3;
  color: #FF3B3F;
  line-height: 1.2;
  font-size: 14px;
  padding-bottom: 20px;
}

</style>
