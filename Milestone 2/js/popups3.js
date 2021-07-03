//FUNCTIONS DE POP UP E POP DOWNS, MODIFICAM CSS PARA ATIVAR/DESATIVAR
function pop_up (){
  document.querySelector(".popup").classList.add("active");
}

function pop_down (){
  document.querySelector(".popup").classList.remove("active");
}

// POP UP SOBRE AVALIAÇÃO
btn1 = document.getElementsByClassName("judge");
btn2 = document.getElementsByClassName("close-btn");

//EVENT LISTENERS

btn1[0].addEventListener("click", pop_up);
btn1[1].addEventListener("click", pop_up);
btn1[3].addEventListener("click", pop_up);
btn1[3].addEventListener("click", pop_up);

btn2[0].addEventListener("click", pop_down);
