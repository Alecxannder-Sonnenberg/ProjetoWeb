<template>
  <div class = "data">

    <div v-if="popup === 1">
      <PopUpAlterarDadosConta
          @close="close"
          @changeReq="changeReq"/>
    </div>

    <div id = "title">

      <p><b> Meus Dados </b></p>


    </div>

    <!-- Dados de conta -->

    <ul class = "pdata">

      <p><b> Informações Pessoais </b></p>

      <li id = "name">Nome: {{ siteuser.username }}</li>
      <li id = "date">Data de Nascimento: {{ siteuser.datanasc }}</li>
      <li id = "curso">Curso: {{ siteuser.curso }}</li>
      <li id = "email">Email: {{ siteuser.email }}</li>

    </ul>

    <!-- Aqui e possivel alterar esses dados, nao requer autenticacao -->

    <button id = "changepdata" @click="changeconta"> Alterar Dados da Conta</button>



    <!-- Informacoes de pagamento do usuario -->

    <ul class = "cdata">

      <p><b> Informações de Compra </b></p>

      <li>Credito na Plataforma: R$<span id = "credval" type = "number">100.00</span></li>
      <li>Formas de Pagamento: <span id = "paymet">Cartão - Debito</span></li>

    </ul>

    <!-- Usuario pode alterar suas opcoes de compra e adicionar a suar carteira -->

    <button id = "changecdata" @click="changecompra"> Alterar Dados de Compra</button>



  </div>
</template>




<script>
import PopUpAlterarDadosConta from "@/components/PopUpAlterarDadosConta";
export default {
  name: "DadosAdmin",
  components: {PopUpAlterarDadosConta},
  data() {//DATA EH ONDE EH COLOCADO RESPOSTAS DO SERVER (?)
    return{
      popup: 0
    }
  },

  props: {
    siteuser: Object
  },


  methods:{
    changeReq(changeform) {
      this.$emit('changeReq', changeform)
      this.popup = 0
    },
    changeconta() {
      this.popup = 1
    },
    changecompra() {
      this.popup = 2
    },
    close() {
      this.popup = 0
    }
  },




}
</script>




<style scoped>
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
</style>