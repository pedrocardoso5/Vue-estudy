<template >
<div class="home">
    <div class="bloco-1" >
        <!-- <h1>TESTE</h1> -->
        <!-- <img src="../amigo.jpg" fluid alt="Kitten" class="imgp"> -->
        <!-- <label class="teste">texto grande pra sei la</label> -->
        <!-- <b-button class="butao" variant="outline-primary" size="lg"> <router-link to="/sobre"> Click aqui!!!</router-link></b-button> -->
        <b-card
          overlay
          img-src="https://images2.imgbox.com/32/1e/yk8z7ZUH_o.jpg"
          img-alt="Card Image"
          text-variant="Black"
          title="Image Overlay"
          sub-title="Subtitle"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
    </div>
    <b-container class="bv-example-row">
      <b-row align-v="center">
        <b-col>
          <b-card title = "BATERIA" img-src="https://picsum.photos/600/300/?image=25" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
            <b-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente, nostrum provident minus sed dolorem nobis eos delectus numquam aut suscipit dolor iste dicta qui nesciunt ipsum aspernatur fugiat itaque.
            </b-card-text>
            <b-button variant= "secondary">Ver</b-button>
          </b-card>
        </b-col>
        <b-col>
           <b-card title = "MODULO" img-src="https://picsum.photos/600/300/?image=25" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
            <b-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente, nostrum provident minus sed dolorem nobis eos delectus numquam aut suscipit dolor iste dicta qui nesciunt ipsum aspernatur fugiat itaque.
            </b-card-text>
            <b-button variant= "secondary">Ver</b-button>
          </b-card>
        </b-col>
        <b-col>
           <b-card title = "PIEZO" img-src="https://picsum.photos/600/300/?image=25" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
            <b-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente, nostrum provident minus sed dolorem nobis eos delectus numquam aut suscipit dolor iste dicta qui nesciunt ipsum aspernatur fugiat itaque.
            </b-card-text>
            <b-button variant= "secondary">Ver</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div class="Sapato" style="backgroung-color: #fff;">
      <div class="container">

      </div>
    </div>
</div>
</template>
<style>
.bv-example-row{
  height: 1000px;
  margin-top: auto;
}
.Sapato{
  width: 100%;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
  background-color:white;
}
.bloco-1{
  background-color:black;
  color:black;
}

.teste{
  position: absolute;
  font-size: 30px;
  right: 20%;
  top: 20vh;
  color: rgb(87, 7, 7);
}
.btn-outline-primary:hover{
  background-color: #FF3B3F;
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
