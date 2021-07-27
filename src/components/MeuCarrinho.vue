<template>

  <div id="background">

    <div class = "curPlace">
      <p>Meu Carrinho</p>
    </div>
    <div class = "box">
      <div class = "carrinhoContent">
        <!-- aqui ficarão os itens do carrinho, cada item deve seguir o esquema a seguir-->

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex.png"></a>
          <span class = "titulo">Exercicio 4 da turma SCC42069</span>
          <div class="estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">30,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex2.png"></a>
          <span class = "titulo">Trabalho de Web-development II</span>
          <div class="estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">60,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex3.png"></a>
          <span class = "titulo">Trabalho final de Redes Neurais</span>
          <div class="estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">45,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <span class = "titulo">Exercicio 1 de calculo IV</span>
          <div class = "estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">15,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <span class = "titulo">Exercicio 1 de calculo IV</span>
          <div class = "estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">15,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <span class = "titulo">Exercicio 1 de calculo IV</span>
          <div class = "estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">15,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <span class = "titulo">Exercicio 1 de calculo IV</span>
          <div class = "estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">15,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>

        <div class="item">
          <a href="#"><img class="prodImg" src="../assets/itemex4.png"></a>
          <span class = "titulo">Exercicio 1 de calculo IV</span>
          <div class = "estrelas">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          R$<span class="preco">15,00</span>
          <button type="button" class="remove">Remover Item</button>
        </div>
        <button type="button" id="finalizarCompra"> Comprar </button>
      </div>

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
  padding: 0px 0px 0px 0px;
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
  display: flex;
  flex-wrap: wrap;
  background-color: grey;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  height: 750px;
}

/* DEFINE A ORGANIZACAO DENTRO DO ITEM */
.item{
  padding-top:20px;
  display: flex;
  flex-wrap:wrap;
  width: 160px;
  height: 300px;
  margin-left: 5%;
  text-align: center;
}

/* FAZ O ITEM SER UM LINK */

.prodImg{
  width: 150px;
  height: 150px;
  margin: 5px;
}

.remove {
  margin-top: -2.5%;
  border-radius: 5px;
  outline: none;
}

.estrelas{
  width: auto;

}

.checked{
  color:orange;
}

/* ESPECIFICAÇÃO DO BOTAO DE FINALIZAR*/

#finalizarCompra{
  margin: 100px;
  width:60px;
  height: 20px;
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