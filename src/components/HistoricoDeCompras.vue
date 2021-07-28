<template>
  <div class = "data">

    <div id = "title">

      <p><b> Historico de Compras</b></p>

    </div>

    <!-- Conteudo da caixa (Historico) -->
    <h2>Informações de compra</h2>

    <div class = container>
      <!-- Grid com as informações -->
      <!-- Organizada via css -->
      <div class = "grid_object" id = "1">

        <div class = "image"><img src = "../assets/itemex.png" alt = "Error"></div>
        <div class = "productname">Trabalho de Web</div>
        <div class = "grating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div class = "price">Preço: R$1000</div>
        <div class = "headerpday">Data de compra:</div>
        <div class = "pday">01/02/0003 </div>
        <div class = "headerurating">Sua avaliação:</div>
        <div class = "urating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>

      </div>

      <div class = "grid_object" id = "2">

        <div class = "image"><img src = "../assets/itemex4.png" alt = "Error"></div>
        <div class = "productname">Trabalho de Web</div>
        <div class = "grating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class = "price">Preço: R$1000</div>
        <div class = "headerpday">Data de compra:</div>
        <div class = "pday">01/02/0003 </div>
        <div class = "headerurating">Sua avaliação:</div>
        <div class = "urating"><button class = "avaliate">Avaliar</button></div>

      </div>

      <div class = "grid_object" id = "3">

        <div class = "image"><img src = "../assets/itemex2.png" alt = "Error"></div>
        <div class = "productname">Trabalho de ICC</div>
        <div class = "grating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class = "price">Preço: R$11000</div>
        <div class = "headerpday">Data de compra:</div>
        <div class = "pday">31/12/1003 </div>
        <div class = "headerurating">Sua avaliação:</div>
        <div class = "urating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>

      </div>

      <div class = "grid_object" id = "4">

        <div class = "image"><img src = "../assets/itemex3.png" alt = "Error"></div>
        <div class = "productname">Trabalho de ICC</div>
        <div class = "grating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class = "price">Preço: R$11000</div>
        <div class = "headerpday">Data de compra:</div>
        <div class = "pday">31/12/1003 </div>
        <div class = "headerurating">Sua avaliação:</div>
        <div class = "urating"><button class = "avaliate">Avaliar</button></div>

      </div>

    </div>

  </div>
</template>



<script>
export default {
  name: "HistoricoDeCompras"
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

.pdata{
  font-size: 24px;
}

/* HISTORICO DE COMPRAS*/

.container {
  height: 450px;
  overflow-y: scroll;
}

/* OBJETO DO HISTORICO DE COMPRAS */

/* Como os elementos vao ser conhecidos na grid template */

/* Imagem */
.image {
  grid-area: image;
  text-align: center;
}

.image img {
  width: 125px;
  height: 125px;
  border: 2px solid black;
}

/* Nome do Produto */
.productname {
  grid-area: productname;
  font-size: 20px;
  font-weight: bold;
}

/* Rating geral */
.grating {
  grid-area: grating;
}

.grating span {
  margin-bottom: 100px;

}

/* Preço */
.price {
  grid-area: price;
  margin-top: -40%
}

/* Informaçoes de data de pagamento*/
.headerpday {
  grid-area: headerpday;
  font-size: 20px;
  font-weight: bold;

}
.pday {
  grid-area: pday;
  margin-left: 10%;
}

/* Informaçoes de rating do usuario */
.headerurating {
  grid-area: headerurating;
  font-size: 20px;
  font-weight: bold;
}
.urating {
  grid-area: urating;
}
.urating img {
  width: 20%;
  height: 20%;
}
.urating button {
  margin-left: 13%;
  outline: none;
  background-color: white;
  border-radius: 10px;
}

/* Determina como o objeto parece */
.grid_object{
  display: grid;
  /* Como os objetos vao estar organizados na grid templace */
  grid-template-areas:
  "image image productname headerpday headerurating"
  "image image grating pday urating"
  "image image price pday none";
  grid-gap: 5%;
  grid-row-gap: 30%;
  margin-top: 2%;
  margin-bottom: 10%;
}

/* FIM DO OBJETO DO HISTORICO DE COMPRAS *?

/*FIM DO HISTORICO DE COMPRAS */

/* FIM DO CONTENT */


</style>