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
  name: "DecissoesPendentes"
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



</style>