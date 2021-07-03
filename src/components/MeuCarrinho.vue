<template>

  <div id="background">

    <div class = "curPlace">
      <p>Meu Carrinho(será re-feito)</p>
    </div>
    <div class = "box">
      <div class = "carrinhoContent">
        <!-- aqui ficarão os itens do carrinho, cada item deve seguir o esquema a seguir-->

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex.png"></a>
          <p>Exercicio 4 da turma SCC42069</p>
          <img class="estrelas" src="../assets/image_12.png">
          <p>=R$30,00</p>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex2.png"></a>
          <p>Trabalho de Web-development II</p>
          <img class="estrelas" src="../assets/image_12.png">
          <p>=R$50,00</p>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex3.png"></a>
          <p>Trabalho final de Redes Neurais</p>
          <img class="estrelas" src="../assets/image_12.png">
          <p>=R$60,00</p>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <p>Exercicio 1 de calculo IV</p>
          <img class="estrelas" src="../assets/image_12.png">
          <p>=R$15,00</p>
          <button type="button" class="remove">Remover Item</button>
        </div>

      </div>

    </div>
    <!-- utilizei o css da navbar, para que o botão mantenha o estilo do site-->
    <div class="navbar" id="botaoFinalizar">
      <ul>
        <li><a href = "#" class = "bar" id = "fc">Finalizar compra</a></li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  name: 'MeuCarrinho',
  props: {
    msg: String
  }
}
</script>

<style scoped>

/* CURRENT PLACE */
#content {


}

/* A BARRA LOGO A BAIXO DA NAVBAR QUE FALA EM QUE LUGAR A PESSOA ESTA NO SITE */
.curPlace {
  margin: 0 auto;
  padding: 0px 10px 0px 10px;
  width: 65%;
  text-align: center;
  background-color: grey;
  border-radius: 5px;
}

.curPlace p{
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

/* ISSO EH UM WRAPER PRO CARRINHOCONTENT */
.box{
  display: block;
  background-color: grey;
  margin: 0 auto;
  width: 100%;
  max-width: 65%;

  min-height: 200%;
}

/* UMA GRID SCROLLAVEL QUE ORGANIZA OS ITENS DO CARRINHO */
.carrinhoContent{
  display: grid;

  margin: 0 auto;
  background-color: grey;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;

  height: 750px;

  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 150px;
  grid-auto-rows: minmax(100px, auto);
}

/* DEFINE A ORGANIZACAO DENTRO DO ITEM */
.carrinhoContent div{
  display: inline-block;
  width: 50%;
  height: 300px;
  min-height: 200px;
  margin-left: 20%;

  border-radius: 4px;
}
/* FAZ O ITEM SER UM LINK */

.prodImg{
  width: 100%;
  height: 60%;
}

.estrelas{
  width: auto;
  height: 10%;
}

/* ESPECIFICAÇÃO DO BOTAO DE FINALIZAR QUE HERDA DO NAVBAR */
#botaoFinalizar {
  margin-left: 60%;
}





/* FIM DA PAGINA */

</style>


<!--
<script type="text/javascript">

function setup() {
  var els = document.getElementsByClassName("remove");
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function (e) {
      e.preventDefault();
      e.target.closest('div.item').remove();
    });
  }
}
setup();
</script>
-->