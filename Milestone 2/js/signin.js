function login(){
  user = document.getElementById("un").value;
  pass = document.getElementById("ps").value;
  if (user != "" && pass != "")
    window.location.replace("dados.html");
  else{
      alert("Insira todos os dados");
    }

}

function login2(){
  user = document.getElementById("un").value;
  pass = document.getElementById("ps").value;

  if (user === "admin" && pass === "admin"){
    window.location.replace("dadosadmin.html");
  }
  else{
    alert("Nome de Usuario e Senha Errados");
  }

}
