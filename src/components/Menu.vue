<template>
  <div class = "menu">

    <div class= "menubar">

      <ul class = "options">

        <!-- Imagem e nome de usuario, assim com um boas vindas -->

        <section class = "user">
          <img src = "../assets/default.png" id = "profile-pic">
          <span id = "welcome">

                <b><span id = "username">{{siteuser.username}}</span>, Bem Vindo.</b>

              </span>

        </section>

        <!-- Funcionalidades e outras informacoes -->

        <p><b>Funcionalidades</b></p>

        <ul>

          <li><a>Meus Dados</a></li>
          <li v-if="siteuser.admin"><a @click="$emit('gotoHistoricoDeBanimentos')">Historico de Banimentos</a></li>
          <li v-if="siteuser.admin"><a @click="$emit('gotoDecisoesPendentes')">Denuncias Pendentes</a></li>
          <li><a @click="$emit('gotoHistoricoDeCompras')">Historico de Compras</a></li>

        </ul>

        <p><b>Problemas?</b></p>

        <ul>

          <li>Email: helpdesk@svt.com</li>
          <li>Fale Conosco: </li>
          <p>(XX) XXXXX-XXXX</p>

        </ul>

        <a href = "404.html" ><b>FAQ</b></a>

      </ul>

      <p><a href = "initialpage.html" id = "sair"><b>Sair</b></a></p>

    </div>

  </div>
</template>



<script>
export default {
  name: "Menu",
  props: [
      'siteuser'
  ]
}
</script>



<style scoped>
.menu {

  width: 21%;
  height: 100%;
  display: flex;
  background-color: grey;
  border: 1px solid;
  border-radius: 10px;
  margin: 50px 10px 10px 10px;
}

.options{
  color: #FFFFFF;
  text-transform: uppercase;

}

.options ul{
  list-style:disc;
}

.options ul li{
  line-height: 2.5;
}

.options a{
  text-decoration: none;
  color: #FFFFFF;
  position: relative;
}

.menubar{
  position: relative;
}

.menubar p a{

  font-size: 20px;
  float: right;
  color: #FFFFFF;
  margin-bottom: 15px;
}

.user{
  position: relative;
}

.user img{
  border-radius: 50%;
  border: solid black 1px;
}

.user span b{
  margin-top: 7%;
  float: right;
}

.options a b{
  float: left;
}

</style>