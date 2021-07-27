<!--NAO SEI SE DA TEMPO DE IMPLEMENTAR-->
<template>
  <div class = "popup1">

    <div class = "close-btn" @click="$emit('close')">&times;</div>

    <form @submit="onSubmit" class = "form">

      <h2>Altere seus dados</h2>
      <div class = "form-element">
        <label for = "Nome">Nome:</label>
        <input type = "text" v-model="usrnm" id = "NA" placeholder = "Novo Nome">
      </div>


      <div class = "form-element">
        <label for = "Nascimento">Nascimento:</label>
        <input type = "date" v-model="date" id = "DNA">
      </div>

      <div class = "form-element">
        <label for = "Curso">Curso:</label>
        <input type = "text" v-model="crs" id = "CA" placeholder = "Curso Atual">
      </div>

      <div class = "form-element">
        <label for = "Email">Email:</label>
        <input type = "email" v-model="email" id = "EA" placeholder = "Novo Email">
      </div>

      <div class = "form-element">
        <input type = "submit"  value = "Confirmar mudanças" id = "submit1">
      </div>

    </form>

  </div>
</template>

<script>
export default {
  name: "PopUpAlterarDadosConta",

  data() {
    return{
      usrnm: '',
      date: '',
      crs: '',
      email: '',
    }
  },

  methods: {
    onSubmit(e){
      e.preventDefault()

      const changeform = {
        usrnm:this.usrnm,
        date:this.date,
        crs:this.crs,
        email:this.email,
      }
      this.$emit('changeReq', changeform)
    }
  }
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

.pdata{
  font-size: 24px;
}

.pdata li{
  list-style: none;
}

#changepdata{
  float: right;
  width: 10%;
  font-size: 22px;
  background: #F0F0F0;
  border: none;
  border-radius: 10px;
  margin: -100px 100px 0px 100px;
}

.cdata{
  font-size: 24px;
}

.cdata li{
  list-style: none;
}

#changecdata{
  float: right;
  width: 10%;
  font-size: 22px;
  background: #F0F0F0;
  border: none;
  border-radius: 10px;
  margin: -100px 100px 0px 100px;
}

/* FIM DOS DADOS */

/* CONTROLE DE POP-UPS */

/* Estamos cientes de que o Pop Up 2 sobrepoem o pop up 1 */
/* Discutindo se vale a pena mudar */

/* Buscando uma forma de dar um reset nos pop ups quando ocorrer um pop down*/

/* POP UP 1*/
.popup1{
  position: absolute;
  top: 5%;
  right: 18%;
  opacity: 1;
  transform: translate(-50% -50%) scale(1.25);
  width: 380px;
  padding: 20px 30px;
  background: #0e4e6a;
  border-radius: 9px;
  box-shadow: 2px 2px 4px 4px black;
  box-sizing: border-box;
  transition: top 0ms ease-in-out 200ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
}


.popup1.active{
  top: 0%;
  opacity: 1;
  transform: translate(-50% -50%) scale(1);
  transition: top 0ms ease-in-out 0ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
}

.popup1 .close-btn{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: white;
  color: black;
  text-align: center;
  line-height: 15px;
  border-radius: 10px;
  cursor: pointer;
}

.popup1 .form h2{

  text-align: center;
  margin:10px 0px 20px;
  font-size: 20px;

}

.popup1 .form .form-element{
  margin: 15px;
}

.popup1 .form .form-element label{
  font-size: 16px;
  font-weight: bold;
}

/* Manipula os elementos de input especificos que eu quero */
/* Não sabia que isso era possivel mas se especificar os diferentes tipos*/
/* e separar eles com virgula o css se aplica a todos os escolhidos*/
/* bem util para nao afetar o submit */

.popup1 .form .form-element input[type="text"],
.popup1 .form .form-element input[type="date"],
.popup1 .form .form-element input[type="email"]{
  margin-top: 5px;
  display: block;
  width: 100%;
  padding: 9px;
  outline: none;
  border: 1px solid purple;
  border-radius: 5px;
}

.popup1 .form .form-element input[type = submit]{
  width: 100%;
  height: 40px;
  background: grey;
  border: none;
  outline: none;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

/* POP UP 2 - Tentei fazer por classes mas já não consigo pensar, então vou no que é certeza*/
/* AGRADEÇO SE ALGUEM QUE ESTÁ LENDO ESSE CODIGO DER UMA SUGESTÃO DE COMO SER MAIS ESPERTO*/
.popup2{
  position: absolute;
  top: -150%;
  left: 45%;
  opacity: 0;
  transform: translate(-50% -50%) scale(1.25);
  width: 380px;
  padding: 20px 30px;
  background: #0e4e6a;
  border-radius: 9px;
  box-shadow: 2px 2px 4px 4px black;
  box-sizing: border-box;
  transition: top 0ms ease-in-out 200ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
}


.popup2.active{
  top: 0%;
  opacity: 1;
  transform: translate(-50% -50%) scale(1);
  transition: top 0ms ease-in-out 0ms,
  opacity 200ms ease-in-out 0ms,
  transform 0ms ease-in-out 0ms;
}

.popup2 .close-btn{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: white;
  color: black;
  text-align: center;
  line-height: 15px;
  border-radius: 10px;
  cursor: pointer;
}

.popup2 .form h2{

  text-align: center;
  margin:10px 0px 20px;
  font-size: 20px;

}

.popup2 .form .form-element{
  margin: 15px;
}

.popup2 .form .form-element label{
  font-size: 16px;
  font-weight: bold;
}

/* Manipula os elementos de input especificos que eu quero */
/* Não sabia que isso era possivel mas se especificar os diferentes tipos*/
/* e separar eles com virgula o css se aplica a todos os escolhidos*/
/* bem util para nao afetar o submit */

.popup2 .form .form-element input[type="text"],
.popup2 .form .form-element input[type="date"],
.popup2 .form .form-element input[type="email"]{
  margin-top: 5px;
  display: block;
  width: 100%;
  padding: 9px;
  outline: none;
  border: 1px solid purple;
  border-radius: 5px;
}

.popup2 .form .form-element input[type = submit]{
  width: 100%;
  height: 40px;
  background: grey;
  border: none;
  outline: none;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
/* FIM DO CONTROLE DE POP-UPS */

/* FIM DO CONTENT */

/* CONTROLE DO EFEITO DA BARRA AO PASSAR O MOUSE SOBRE O TEXTO*/
ul li a::after{
  content: '';
  height: 3px;
  width: 0px;
  background: #FFFFFF;
  position: absolute;
  left: 0;
  bottom: -9px;
  transition: 0.5s;
}

ul li a:hover::after{
  width: 100%;
}

/* FIM DO CONTROLE DE EFEITOS*/

/* MODAL */

/* FIM DO MODAL */



</style>