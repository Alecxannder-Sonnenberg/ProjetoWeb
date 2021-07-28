<template>
  <!-- TELA DE SIGN UP -->

  <div class = "sudata">
    <form class = "information">

      <b>Nome de Usuario:</b>
      <input type = "text" placeholder="Nome" required autofocus maxlength="26">

      <b>Senha:</b>
      <input type = "password" placeholder="Senha" required >

      <b>Confirme sua Senha:</b>
      <input type = "password" placeholder="Confirme a Senha" required>

      <b>Email:</b>
      <input type = "email" placeholder="Email@gmail.com" required>

      <b>Curso:</b>
      <input type = "text" placeholder = "Curso">

      <b>Data de Nascimento:</b>
      <input type = "date">

      <div class = "buttons">
        <button id = "back"
                @click="$emit('closeSignup')"
        ><a>Voltar</a></button>
        <input type = "submit" value = "Criar Conta" id = "submit">
      </div>

    </form>

  </div>
</template>

<script>
export default {
  name: "Signup"
}
</script>

<style scoped>
.sudata{

  width: 15em;
  padding: 10px 30px 20px 30px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  /*margin-top: 80px;*/
  /*border: 2px solid black;*/
  /*border-radius: 10px;*/
  /*overflow: auto;*/


  /*copiado de login.vue*/
  background-color: grey;

  /*copiado de popup1*/
  position: absolute;
  top: 12%;
  right: 7%;

  border-radius: 9px;
  box-shadow: 2px 2px 4px 4px black;
  box-sizing: border-box;
  transition: top 0ms ease-in-out 200ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
  z-index: 98;

}
</style>