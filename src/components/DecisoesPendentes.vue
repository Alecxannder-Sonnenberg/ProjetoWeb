<template>
  <div class = "data">

    <div id = "title">

      <p><b> Decisões Pendentes</b></p>

    </div>

    <!-- Informaçoes do historico -->
    <div class = "grid_info">
      <h2 class = "info1">Usuario Infrator</h2>
      <h2 class = "info2">Denuncia</h2>
      <h2 class = "info3">Veredito</h2>
    </div>

    <!-- Conteudo da caixa (Historico) -->
    <div class = container>
      <!-- Grid com as informações -->
      <!-- Organizada via css -->
      <div class = "grid_object" id = "1">

        <div class = "userimage"><img src = "../assets/default.png" alt = "Erro"></div>
        <div class = "username">Usuario</div>
        <div class = "tipodenuncia">Comentarios Toxicos</div>
        <div class = "veredito"><button class = "judge">Julgar</button></div>

      </div>


      <div class = "grid_object" id = "3">

        <div class = "userimage"><img src = "../assets/default.png" alt = "Erro"></div>
        <div class = "username">Usuario2</div>
        <div class = "tipodenuncia">Fraude</div>
        <div class = "veredito"><button class = "judge">Julgar</button></div>

      </div>

      <div class = "grid_object" id = "2">

        <div class = "userimage"><img src = "../assets/default.png" alt = "Erro"></div>
        <div class = "username">Usuario</div>
        <div class = "tipodenuncia">Comentarios Toxicos</div>
        <div class = "veredito"><button class = "judge">Julgar</button></div>

      </div>


      <div class = "grid_object" id = "4">

        <div class = "userimage"><img src = "../assets/default.png" alt = "Erro"></div>
        <div class = "username">Usuario3</div>
        <div class = "tipodenuncia">Fraude</div>
        <div class = "veredito"><button class = "judge">Julgar</button></div>

      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "DecissoesPendentes",
  data() {//DATA EH ONDE EH COLOCADO RESPOSTAS DO SERVER (?)
    return{
      defendants: []
    }
  },
  created() {
    this.defendants = [
      {
        id: 1,
        prodName: 'Usuario',
        img: String,
        Denuncia: 5
      }
    ]
  }
}


</script>





<style scoped>

/* DADOS */

.data{
  height: auto;
  width: 76.2%;
  background-color: grey;
  border-radius: 10px;
  border: 2px solid black;
  color: #FFFFFF;
  margin-top: 3%;
  position: relative;
}

#title{
  font-size: 32px;
  margin: 5px 10px 5px 20px;
}

.data h2 {
  margin-left: 40px;
}

/* FIM DOS DADOS */

/* HISTORICO DE COMPRAS*/

.container {
  height: 450px;
  overflow-y: scroll;
}

/* OBJETO DO HISTORICO DE COMPRAS */

/* Grid de Informações */

.info1 {
  grid-area: info1;
  font-size: 20px;
  font-weight: bold;
}

.info2 {
  grid-area: info2;
  font-size: 20px;
  font-weight: bold;
}

.info3 {
  grid-area: info3;
  font-size: 20px;
  font-weight: bold;
}

.grid_info{
  display: grid;
  /* Como os objetos vao estar organizados na grid templace */
  grid-template-areas:
  "info1 info2 info3";
  grid-gap: 5%;
  grid-row-gap: 30%;
  margin-top: 2%;
  margin-left: 18%;

}

/* Como os elementos vao ser conhecidos na grid template */

/* Imagem do Usuario*/
.userimage {
  grid-area: userimage;
  text-align: center;
}

.userimage img {
  width: 75px;
  height: 75px;
  border: 2px solid black;
  border-radius: 50px;
}

/* Nome do Usuario*/
.username {
  grid-area: username;
  font-size: 20px;
  font-weight: bold;
}

/* Informaçoes */
.tipodenuncia {
  grid-area: tipodenuncia;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10%;

}

/* Veredito */
.veredito {
  grid-area: veredito;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20%;
  text-align: left;
}


/* Determina como o objeto parece */
.grid_object{
  display: grid;
  /* Como os objetos vao estar organizados na grid templace */
  grid-template-areas:
  "userimage username tipodenuncia veredito";

  grid-row-gap: 30%;
  margin-top: 5%;
  margin-bottom: 10%;

}

/* FIM DO OBJETO DO HISTORICO DE COMPRAS *?

/*FIM DO HISTORICO DE COMPRAS */

/* FIM DO CONTENT */

/* POPUP */

.popup .form h2{

  text-align: center;
  margin:10px 0px 20px;
  font-size: 20px;

}


.popup .form .form-element input[type = radio]{

  margin-left: 100px;

}
.popup .form .form-element input[type = submit]{
  width: 100%;
  height: 40px;
  background: grey;
  border: none;
  outline: none;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}


/* FIM DO POPUP */

/* CONTROLE DO EFEITO DA BARRA AO PASSAR O MOUSE SOBRE O TEXTO*/
ul li a::after{
  content: '';
  height: 3px;
  width: 0px;
  background: #FFFFFF;
  position: absolute;
  left: 0;
  bottom: -9px;
  transition: 0.5s;
}

ul li a:hover::after{
  width: 100%;
}


</style>