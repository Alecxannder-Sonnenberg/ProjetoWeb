<template>
  <div class = "resultado">
    <img class = "img" src="../assets/exempiu.png">
    <br>
<!--    <span class = "titulo">Introdução ao Desenvolvimento Web</span>-->
    <span class = "titulo">{{ product.prodName }}</span>
    <div class="estrelas">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
    R$<span class="valor">5,00</span>
  </div>
</template>

<script>
export default {
  name: "Resultado",
  props:{
    product:Object
  }
}
</script>

<style scoped>

.checked{
  color:orange;
}

.pdata li{
  list-style: none;
}

.cdata li{
  list-style: none;
}
.img{
  width:100px;
  height: 100px;
  margin: 10px 2px 2px 2px;
}

.titulo{
  text-align:center;

}

.resultado{
  margin:10% 6% 0% 6%;
  padding:15px;
  width: 120px;
  height: auto;
  background: rgba(80, 80, 80, 0.5);
  color: white;
  text-align: center;

}

</style>