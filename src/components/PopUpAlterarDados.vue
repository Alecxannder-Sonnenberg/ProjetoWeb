<!--NAO SEI SE DA TEMPO DE IMPLEMENTAR-->
<template>
  <div class = "popup1">

    <div class = "close-btn">&times;</div>

    <div class = "form">

      <h2>Altere seus dados</h2>
      <div class = "form-element">
        <label for = "Nome">Nome:</label>
        <input type = "text" id = "NA" placeholder = "Novo Nome">
      </div>


      <div class = "form-element">
        <label for = "Nascimento">Nascimento:</label>
        <input type = "date" id = "DNA">
      </div>

      <div class = "form-element">
        <label for = "Curso">Curso:</label>
        <input type = "text" id = "CA" placeholder = "Curso Atual">
      </div>

      <div class = "form-element">
        <label for = "Email">Email:</label>
        <input type = "email" id = "EA" placeholder = "Novo Email">
      </div>

      <div class = "form-element">
        <input type = "submit" value = "Confirmar mudanças" id = "submit1">
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "PopUpAlterarDados"
}
</script>

<style scoped>

</style>