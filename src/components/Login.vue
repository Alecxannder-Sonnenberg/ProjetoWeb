<template>
  <div class = "sidata">
    <form class = "information" @submit="onSubmit" id = "login">

      <b>Nome de Usuario:</b>
      <input type = "text" placeholder="Nome" v-model="usrnm" required autofocus maxlength="26" id = "un">

      <b>Senha:</b>
      <input type = "password" placeholder="Senha" v-model="pswd" required id = "ps">

      <div class = "buttons">
        <input  type = "submit" value = "Sign in" id = "submit">
        <button id = "back"
                @click="$emit('closeLogin')"
        ><a>Fechar</a></button>
      </div>

    </form>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return{
      usrnm: '',
      pswd: '',
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()

      const loginform = {
        usrnm:this.usrnm,
        pswd:this.pswd

      }
      this.$emit('loginAttempt', loginform)
    }
  }
}
</script>

<style scoped>
/* TELA DE LOGIN */
.sidata{

  width: 17em;
  background-color: grey;
  /*padding: 10px 30px 20px 30px;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  /*margin-top: 80px;*/
  /*border: 2px solid black;*/
  /*border-radius: 10px;*/
  /*overflow: auto;*/

  /*copiado de popup1*/
  position: absolute;
  top: 12%;
  right: 7%;
  opacity: 1;
  /*transform: translate(-50% -50%) scale(1.25);*/

  padding: 20px 30px;

  border-radius: 9px;
  box-shadow: 2px 2px 4px 4px black;
  box-sizing: border-box;
  transition: top 0ms ease-in-out 200ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
  z-index: 99;
}

.information{

  margin: 15px 10px 0px 10px;
  color: #FFFFFF;
}

.information input{

  margin: 15px 10px 10px 10px;
  border: 2px solid black;

}

/* BOTÕES */

.buttons{
  margin: 10px;
}

.buttons button{
  outline: none;
  border: 2px solid black;
  border-radius: 10px;
}

.buttons a{
  text-decoration: none;
  color: black;
}

.buttons input{
  outline: none;
  border-radius: 10px;
}

#back{
  margin: 10px 10px 0 -10px;
  float: left;
}

#submit{
  margin: 10px -10px 0 10px;
  float: right;
}

/* FIM DA TELA DE LOGIN */

</style>