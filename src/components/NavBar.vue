<template>

  <header>
    <Login v-if="popupState === 'Login'"
           @loginAttempt="loginAttempt"
           @closeLogin="closeLogin"/>
    <signup v-if="popupState === 'Signup'"
            @closeSignup="closeSignup"/>
    <!-- A barra superior contendo o logo e navegacao -->
    <nav>


      <div id = "banner">

        <div class = "navbar">

          <img src="../assets/logo.png" alt="Error" id = "le"
               @click="$emit('gotoInitialPage')">
          <!-- Logo -->
          <ul>

            <li id = SB1>

              <!--<form method = "post"> -->

              <input type = "text" class = bar id = "busca" placeholder = "Busca">
<!--              fazer um submit dos dados de busca-->
              <button @click="$emit('gotoBusca')" ><i class="fas fa-search fa-lg"></i></button>

              <!--</form>-->

            </li>

            <!-- Barra -->

            <li><a class = "bar" id = "pp">Meus Produtos</a></li>

            <li v-if="loggedin === false"><a  class = "bar" id = "si"
                  @click="popupLogin"
            >Minha Conta</a></li>

            <li v-if="loggedin"><a class = "bar" id = "md"
                   @click="$emit('gotoDados')">
              Minha Conta</a></li>

            <li><a class = "bar" id = "mc"
                   @click="$emit('gotoMeuCarrinho')"
            >Meu Carrinho</a></li>


            <li v-if="loggedin === false"><a  class = "bar" id = "su"
                  @click="popupSignup"
            >Sign Up</a></li>
            <li v-if="loggedin === false"><a  class = "bar" id = "si"
                  @click="popupLogin"
            >Sign In</a></li>

            <span v-if="loggedin" class = 'userinfo'>
              <img src = "../assets/default.png" id = "profile-pic">
              <span id = "welcome">

                <a><span id = "username">{{siteuser.username}}</span>, Bem Vindo.</a>

              </span>
            </span>

          </ul>

        </div>

      </div>

    </nav>

  </header>

</template>



<script>

import Login from "@/components/Login";
import Signup from "@/components/Signup";

export default {
  name: "NavBar",
  components: {
    Signup,
    Login
  },
  props: {
    siteuser: String,
    loggedin: Boolean
  },
  methods:{
    popupLogin(){
      if (this.popupState!=="Login" ){
        this.popupState="Login"
      }
      else{
        this.popupState=""
      }
    },
    closeLogin(){
      this.popupState=""
    },

    popupSignup(){
      if (this.popupState!=="Signup" ){
        this.popupState="Signup"
      }
      else{
        this.popupState=""
      }
    },
    closeSignup(){
      this.popupState=""
    },

    loginAttempt(loginform) {
      this.$emit('loginAttempt', loginform)
      this.showSignup = false
    }
  },
  data(){
    return{
      showLogin: false,
      showSignup: false,
      popupState:""
    }
  }
}
</script>



<style scoped>
body{
  background-color: #0e4e6a;
}

/* NAV */

.navbar{

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

/* ELEMENTOS DO LOGO*/

#le{

  width: auto;
  height: auto;
  cursor: pointer;

}

/* ELEMENTOS DE NAVEGAÇÃO (NAV) */

.navbar ul {
  border: 1px solid;
  background-color: grey;
  border-radius: 10px;
}

.navbar ul li{
  list-style: none;
  display: inline-block;
  margin: 0px 2px 0px 0px;
  padding: 25px 20px 25px 20px;

}

/* TEXTO DOS ELEMENTOS DA BARRA EM NAV */
.navbar ul li a{
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
}

                                          /*someone else check this css*/
.navbar ul span{
  list-style: none;
  display: inline-block;
  margin: 0px 2px 0px 0px;

}

.navbar ul span img{
  border-radius: 50%;
  height: 20px;
  border: solid black 1px;

}

.navbar ul div span a{
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
}

/* BARRA DE BUSCA */
#busca {
  width: 250px;
  border-radius: 2px;
}

/* USER INFO*/
.userinfo{
  color: white;
  font-size: 18px;
}

.userinfo img{
  margin-right: 10px;
}

/* FIM DE NAV */
/*FIM DO HEADER */



</style>