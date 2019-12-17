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
          title=""
          sub-title=""
        >
          <b-card-text style="color= #fff">
            <!-- Lorem ipsum dolor sit amet consecte  tur adipisicing elit. Vel saepe expedita optio atque! Quaerat commodi aliquid distinctio suscipit exercitationem natus illo ab delectus quod, blanditiis, repellat minima eligendi voluptates impedit. -->
          </b-card-text>
        </b-card>
        <div class="rasta">
      <div class="container">
      </div>
      </div>
    </div>
    <b-container class="bv-example-row">
      <b-row align-v="center" align-h="end">
        <b-col>
          <b-card title = "BATERIA" img-src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
            <b-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente, nostrum provident minus sed dolorem nobis eos delectus numquam aut suscipit dolor iste dicta qui nesciunt ipsum aspernatur fugiat itaque.
            </b-card-text>
            <b-button variant= "secondary">Ver</b-button>
          </b-card>
        </b-col>
        <b-col>
           <b-card title = "MODULO" img-src="https://images-na.ssl-images-amazon.com/images/I/510nE9cpblL._SX425_.jpg" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
            <b-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente, nostrum provident minus sed dolorem nobis eos delectus numquam aut suscipit dolor iste dicta qui nesciunt ipsum aspernatur fugiat itaque.
            </b-card-text>
            <b-button variant= "secondary">Ver</b-button>
          </b-card>
        </b-col>
        <b-col>
           <b-card title = "PIEZO" img-src="http://cdn.shopify.com/s/files/1/1604/8285/products/ADC121C021_PIZO_1_7bb4d874-e6d2-47ae-b206-beb27dd6e691_1024x1024.png?v=1487093278" img-alt="Job-info" img-top tag="article" style="max-width:20rem" class="mb-2">
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
  height: 700px;
  margin-top: auto;
}
.Sapato{
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color:white;
}
.rasta{
  width: 100%;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color:#FF3B3F;
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
