// Função que altera as informaççoes pessoais do usuario
function changeuser(){

  na = document.getElementById("NA").value
  dna = document.getElementById("DNA").value
  ca = document.getElementById("CA").value
  ea = document.getElementById("EA").value

  if (na != "")
    document.getElementById("name").innerHTML = "Nome: " + na;

  if (dna != "")
    document.getElementById("date").innerHTML = "Data de Nascimento: " + dna;

  if (ca != "")
    document.getElementById("curso").innerHTML = "Curso: " + ca;

  regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (ea != "" && ea.match(regex))
    document.getElementById("email").innerHTML = "Email: " + ea;
  else if (ea != "" && !ea.match(regex))
    alert("Email Invalido")

}

// Funções que alteram os dados de pagamento do usuario
function changepay(){
  cr = document.getElementById("credit").value
  pay = document.getElementById("payment").value

  if (cr != "" && cr > 0) {

    val = document.getElementById("credval").innerHTML;

    // Conversão de strings
    rval = parseFloat(val, 10);
    rcr = parseFloat(cr, 10);

    if (rval + rcr <= 10000)
      document.getElementById("credval").innerHTML = rval + rcr;
    else alert ("Nosso site possui um limite de R$10000");
  }

  if (pay != "")
    document.getElementById("paymet").innerHTML = pay;
}


// Utilidade
btn1 = document.querySelector("#submit1");
btn2 = document.querySelector("#submit2");
date = document.querySelector("#DNA");


// Event Listeners
btn1.addEventListener("click", changeuser);
btn2.addEventListener("click", changepay);

// Data limite (para que a pessoa não nasça no futuro)
date.max = new Date().toISOString().split("T")[0];
