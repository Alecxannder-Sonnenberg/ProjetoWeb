<template>
  <div class="box">
    <div id = "resultados" >
      <Resultado :product="product" :key="product.id" v-for="product in products"/>
    </div>
  </div>
</template>

<script>
import Resultado from "@/components/Resultado";

export default {
  name: "Busca",
  props:{
    products:Array
  },
  components: {Resultado},
}
</script>

<style scoped>
/* DADOS */

.checked{
  color:orange;
}

.pdata li{
  list-style: none;
}

.cdata li{
  list-style: none;
}

/*Página de Busca*/

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

#resultados {
  display: flex;
  flex-wrap: wrap;
  margin: 5%  auto;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  height: 650px;
}

.box{
  display: block;

  margin: 0 auto;
  width: 100%;
  max-width: 65%;

  min-height: 200%;
}

/* FIM DOS DADOS */

</style>