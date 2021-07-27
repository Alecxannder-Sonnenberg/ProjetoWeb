<template>
  <div id="app">
    <!--barra de navegação-->
    <NavBar
        @gotoBusca="gotoBusca"
        @gotoDados="gotoDados"
        @gotoInitialPage="gotoInitialPage"
        @gotoMeuCarrinho="gotoMeuCarrinho"
        @loginAttempt="loginAttempt"
        :siteuser="siteuser"
        :loggedin="loggedin"
    />

    <div v-if="curPage === 'InitialPage'">
      <InitialPage/>
    </div>

    <div v-if="curPage === 'MeuCarrinho'">
      <MeuCarrinho/>
    </div>

    <div v-if="curPage === 'Dados'">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <DadosAdmin :siteuser="siteuser"/>
      </section>
    </div>

    <div v-if="curPage === 'HistoricoDeCompras'">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeCompras/>
      </section>
    </div>

    <div v-if="curPage === 'HistoricoDeBanimentos'">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeBanimentos/>
      </section>
    </div>

    <div v-if="curPage === 'DecisoesPendentes'">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeBanimentos/>
      </section>
    </div>
    <div v-if="curPage === 'Busca'">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <Busca :products="products"/>
      </section>
    </div>

  </div>

</template>

<script>
import NavBar from "@/components/NavBar";
import Menu from "@/components/Menu";
import DadosAdmin from "@/components/DadosAdmin";
import InitialPage from "@/components/InitialPage";
import MeuCarrinho from "@/components/MeuCarrinho";
import HistoricoDeCompras from "@/components/HistoricoDeCompras";
import HistoricoDeBanimentos from "@/components/HistoricoDeBanimentos";
import Busca from "@/components/Busca";

export default {
  name: 'App',
  components: {
    HistoricoDeBanimentos,
    HistoricoDeCompras,
    MeuCarrinho,
    NavBar,
    InitialPage,
    Menu,
    DadosAdmin,
    Busca,
  },
  methods:{
    //os metodos de mudar de "pagina"
    gotoBusca(){
      this.curPage='Busca'
    },
    gotoDados(){
      this.curPage='Dados'
    },
    gotoInitialPage(){
      this.curPage='InitialPage'
    },
    gotoMeuCarrinho(){
      this.curPage='MeuCarrinho'
    },
    gotoHistoricoDeCompras(){
      this.curPage='HistoricoDeCompras'
    },
    gotoHistoricoDeBanimentos(){
      this.curPage='HistoricoDeBanimentos'
    },
    gotoDecisoesPendentes(){
      this.curPage='DecisoesPendentes'
    },

    loginAttempt(loginform){ //UM MOCKUP PARA UMA TENTATIVA DE LOGIN
      this.loggedin = true
      this.siteuser.username = loginform.usrnm
      if (loginform.usrnm === "admin"){
        this.siteuser.admin = true
        alert("you are admin")
      }
    },
    // AQUI HAVERA UMA MENSAGEM DE MUDAR CERTAS INFORMAÇOES
    changeReq(changeform){
      this.siteuser.username = changeform.usrnm
      this.siteuser.datanasc = changeform.date
      this.siteuser.curso = changeform.crs
      this.siteuser.email = changeform.email
    }
  },
  data() {//DATA EH ONDE EH COLOCADO RESPOSTAS DO SERVER (?)
    return{
      loggedin: false,
      siteuser: Object,
      curPage: "InitialPage",
      products: []
    }
  },
  //created cria os objetos
  created() {
    this.siteuser = {
      username: 'NomeDoCara',
      admin:false,                                  //TROCAR ESSE VALOR CASO QUEIRA SER ADMIN OU NÃO
      datanasc:"0/0/0",
      curso:"cursoatual",
      email: "email",
    }
    this.products = [
      {
        id: 1,
        prodName: 'ProdutoA',
        img: String,
        rating: 5,
        price: 23.40
      },
      {
        id: 2,
        prodName: 'ProdutoB',
        img: String,
        rating: 3,
        price: 50.20
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      },
      {
        id: 3,
        prodName: 'ProdutoC',
        img: String,
        rating: 4,
        price: 20.30
      }
    ]

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  background-color: #0e4e6a;
  margin-top: 0px;
  height: 920px;
}

.content{
  display: flex;
}

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

.links a::after{
  content: '';
  height: 3px;
  width: 0px;
  background: #FFFFFF;
  position: absolute;
  left: 0;
  bottom: -9px;
  transition: 0.5s;
}

.links a:hover::after{
  width: 100%;
}

/* FIM DO CONTROLE DE EFEITOS*/

</style>
