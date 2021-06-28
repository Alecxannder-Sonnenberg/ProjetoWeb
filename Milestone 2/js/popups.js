//FUNCTIONS DE POP UP E POP DOWNS, MODIFICAM CSS PARA ATIVAR/DESATIVAR
function pop_up1 (){
  document.querySelector(".popup1").classList.add("active");
}

function pop_down1 (){
  document.querySelector(".popup1").classList.remove("active");
}

// Um pouco gambiarra eu sei, tentei fazer por classes no css mas falhei
function pop_up2 (){
  document.querySelector(".popup2").classList.add("active");
}

function pop_down2 (){
  document.querySelector(".popup2").classList.remove("active");
}

// POP UP SOBRE OS DADOS DO USUARIO
btn1 = document.querySelector("#changepdata");
btn2 = document.querySelector(".popup1 .close-btn");

//POP UP DAS INFORMACOES DE PAGAMENTO
btn3 = document.querySelector("#changecdata");
btn4 = document.querySelector(".popup2 .close-btn");

//EVENT LISTENERS
btn1.addEventListener("click", pop_up1);
btn2.addEventListener("click", pop_down1);

btn3.addEventListener("click", pop_up2);
btn4.addEventListener("click", pop_down2);
