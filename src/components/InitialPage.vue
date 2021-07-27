<template>
  <div class = "central">

    <a href = "initialpage.html" id = "barlogo">
      <img src = "../assets/logo2.png" alt = "Error Loading Image" id = "ble">
    </a>

    <ul class = "ccontent">

      <div id = SB2>

        <!--<form method = "post"> -->
        <input type = "text" name = "SearchBar" placeholder = "Busca" id = "IB">
        <button><i class="fas fa-search fa-lg"></i></button>
        <!--</form>-->

      </div>

      <div class = "links">

        <a href = "#" id = "vendas">Vendas</a>
        <a href = "#" id = "promocoes">Promoções</a>

      </div>

    </ul>

  </div>
</template>

<script>
export default {
  name: "InitialPage"
}
</script>

<style scoped>

.central{

  position: absolute;
  top: 25%;
  left: 25%;
  margin-top: 80px;
  margin-left: 100px;
}

#SB2{
  top: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

#IB{
  width: 500px;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
}

#barlogo{
  cursor: pointer;
}

.ccontent div{
  margin-top: 10px;
  margin-bottom: 10px;
}

.links{
  top: 100%;
  width: auto;
  height: auto;
  padding-top: 25px;
  margin-left: 90px;


}

.links a{
  position: relative;
  font-size: 24px;
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
}

#vendas{
  margin-right: 100px;
}



</style>