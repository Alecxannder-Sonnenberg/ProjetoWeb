//FUNCTIONS DE POP UP E POP DOWNS, MODIFICAM CSS PARA ATIVAR/DESATIVAR
function pop_up (){
  document.querySelector(".popup").classList.add("active");
}

function pop_down (){
  document.querySelector(".popup").classList.remove("active");
}

// POP UP SOBRE AVALIAÇÃO
btn1 = document.getElementsByClassName("avaliate");
btn2 = document.getElementsByClassName("close-btn");

//EVENT LISTENERS
// POP UP MENOS IDIOTA
btn1[0].addEventListener("click", pop_up);
btn1[1].addEventListener("click", pop_up);

btn2[0].addEventListener("click", pop_down);
