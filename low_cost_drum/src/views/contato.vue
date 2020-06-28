<template>
  <div class="about">
    <div class="caixa-1">
    <b-container class="bv-example-row">
      <div>
        <header class="header-h1">
          <h1 style="color: #FF3B3F">ENTRE EM CONTATO</h1>
        </header>
        <div class="w-100"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga minus rem optio sunt labore quam recusandae, ut a beatae repudiandae quasi eum iusto aut, obcaecati omnis voluptatum iure tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur voluptatum beatae, magnam unde saepe velit repudiandae dolores quis, cumque, assumenda ipsa fuga rerum aliquam hic? Aperiam consectetur nam nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis quisquam sunt reprehenderit aperiam rerum ipsa aliquid corporis repellat molestiae autem suscipit temporibus, neque blanditiis placeat dolore explicabo. Et, provident!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit neque autem, exercitationem tempora error nostrum, quo, saepe fugit aut nam natus iste dicta magni aliquid placeat quae corrupti? Quos.
        </p>
        <div class="w-100"></div>
        <div class="form">
        <form action="https://formspree.io/mzbvwdvd" method="POST">
          <div class="bv-example-row">
            <b-row>
              <b-col>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col><p>Nome: </p><input class="b_texto" type="text" name="name"><br></b-col>
                    <b-col><p style="margin-top: 15px">Email: </p><input class="b_texto" type="email" name="_replyto"><br></b-col>
                  </b-row>
                  <b-row>
                    <b-col><p style="margin-top: 15px">Mensagem: </p><textarea  class="b_texto" name="text" cols="20" rows="10" ></textarea><br></b-col>
                  </b-row>
                  <b-row>
                    <b-col><b-button type="submit" variant="secondary" style="margin-top: 15px">Enviar</b-button></b-col>
                  </b-row>
                </b-container>
              </b-col>
              <b-col>
              </b-col>
            </b-row>
          </div>
            <!-- <p>Nome: </p><input type="text" name="name"><br>
            <div class="w-100"></div>
            <p>Email: </p><input type="email" name="_replyto"><br>
            <input type="submit" value="ENVIAR"> -->
          </form>
        </div>
      </div>
      </b-container>
    </div>
  </div>
</template>
<style>
    .form{
      margin-top: 50px;
      text-align: left;
      width: 300px;
      display: block;
      border-left-color: black;
      padding-bottom: 30px;
    }
    .about{
        text-align: left;
    }
    .header-h1{
        margin: 50px;
        text-align: left;
    }
</style>
