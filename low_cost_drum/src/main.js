import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// const express = require('express')
// const App = express()
// const port = 3000

// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//   host: "http://localhost:8080/#/"
//   port: 25,
//   secure: false,
//   auth:{
//     user: "projetobateria123@gmail.com",
//     pass: " senha123bateria"
//   },
//   tls: { rejectUnauthorized: false }
// })
import BootstrapVue from 'bootstrap-vue'
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
