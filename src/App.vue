<template>
  <div id="app">
    <!--barra de navegação-->
    <NavBar
        @gotoDados="gotoDados"
        @gotoInitialPage="gotoInitialPage"
        @gotoMeuCarrinho="gotoMeuCarrinho"
        @loginAttempt="loginAttempt"
        :siteuser="siteuser"
        :loggedin="loggedin"
    />

    <div v-if="showInitialPage">
      <InitialPage/>
    </div>

    <div v-if="showMeuCarrinho">
      <MeuCarrinho/>
    </div>

    <div v-if="showDados">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <DadosAdmin/>
      </section>
    </div>

    <div v-if="showHistoricoDeCompras">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeCompras/>
      </section>
    </div>

    <div v-if="showHistoricoDeBanimentos">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeBanimentos/>
      </section>
    </div>

    <div v-if="showDecisoesPendentes">
      <section class = "content">
        <Menu
            @gotoHistoricoDeCompras="gotoHistoricoDeCompras"
            @gotoHistoricoDeBanimentos="gotoHistoricoDeBanimentos"
            @gotogotoDecisoesPendentes="gotoDecisoesPendentes"
            :siteuser="siteuser"/>
        <HistoricoDeBanimentos/>
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

export default {
  name: 'App',
  components: {
    HistoricoDeBanimentos,
    HistoricoDeCompras,
    MeuCarrinho,
    NavBar,
    InitialPage,
    Menu,
    DadosAdmin
  },
  methods:{
    //os metodos de mudar de "pagina"
    gotoDados(){
      this.showInitialPage = false
      this.showDados = true
      this.showMeuCarrinho = false
      this.showHistoricoDeCompras = false
      this.showHistoricoDeBanimentos = false
      this.showDecisoesPendentes = false
    },
    gotoInitialPage(){
      this.showInitialPage = true
      this.showDados = false
      this.showMeuCarrinho = false
      this.showHistoricoDeCompras = false
      this.showHistoricoDeBanimentos = false
      this.showDecisoesPendentes = false
    },
    gotoMeuCarrinho(){
      this.showInitialPage = false
      this.showDados = false
      this.showMeuCarrinho = true
      this.showHistoricoDeCompras = false
      this.showHistoricoDeBanimentos = false
      this.showDecisoesPendentes = false
    },
    gotoHistoricoDeCompras(){
      this.showInitialPage = false
      this.showDados = false
      this.showMeuCarrinho = false
      this.showHistoricoDeCompras = true
      this.showHistoricoDeBanimentos = false
      this.showDecisoesPendentes = false
    },
    gotoHistoricoDeBanimentos(){
      this.showInitialPage = false
      this.showDados = false
      this.showMeuCarrinho = false
      this.showHistoricoDeCompras = false
      this.showHistoricoDeBanimentos = true
      this.showDecisoesPendentes = false
    },
    gotoDecisoesPendentes(){
      this.showInitialPage = false
      this.showDados = false
      this.showMeuCarrinho = false
      this.showHistoricoDeCompras = false
      this.showHistoricoDeBanimentos = false
      this.showDecisoesPendentes = true
    },
    loginAttempt(loginform){ //UM MOCKUP PARA UMA TENTATIVA DE LOGIN
      this.loggedin = true
      this.siteuser.username = loginform.usrnm
      if (loginform.usrnm === "admin"){
        this.siteuser.admin = true
        alert("you are admin")
      }
    }

  },
  data() {//DATA EH ONDE EH COLOCADO RESPOSTAS DO SERVER (?)
    return{
      loggedin: false,
      siteuser: Object,
      showInitialPage: true,
      showDados: false,
      showMeuCarrinho: false,
      showHistoricoDeCompras:false,
      showHistoricoDeBanimentos:false,
      showDecisoesPendentes:false,
    }
  },
  //created cria os objetos
  created() {
    this.siteuser = {
      username: 'NomeDoCara',
      admin:false                                   //TROCAR ESSE VALOR CASO QUEIRA SER ADMIN OU NÃO
    }
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
