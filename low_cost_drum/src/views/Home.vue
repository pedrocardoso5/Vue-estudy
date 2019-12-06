<template >
<div class="home">
    <div class="bloco-1">
        <!-- <h1>TESTE</h1> -->
        <img src="../amigo.jpg" fluid alt="Kitten" class="imgp">
        <label class="teste">texto grande pra sei la</label>
        <b-button class="butao" variant="outline-primary" size="lg"> <router-link to="/sobre"> Click aqui!!!</router-link></b-button>
    </div>
</div>
</template>
<style>

.teste{
  position: absolute;
  font-size: 30px;
  right: 20%;
  top: 20vh;
  color: rgb(87, 7, 7);
}
.butao{
  position: absolute;
  font-size: 30px;
  left: 20%;
  top: 25vh;
  color: white;
}
.imgp{
  margin-bottom: 100%;
  /* top: 0vh; */
  left: 0px;
  width: 100%;
  height: 60vh;
  position: absolute;
  padding: 100px 0;
  width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
</style>
