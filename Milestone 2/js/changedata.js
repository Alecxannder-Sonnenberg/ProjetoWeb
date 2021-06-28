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

  if (ea != "")
    document.getElementById("email").innerHTML = "Email: " + ea;


}

function changepay(){
  cr = document.getElementById("credit").value
  pay = document.getElementById("payment").value

  if (cr != "" && cr > 0){


    val = document.getElementById("credval").innerHTML;

    document.getElementById("credval").innerHTML = val + cr;

  }

  if (pay != "")
    document.getElementById("paymet").innerHTML = pay;
}

btn1 = document.querySelector("#submit1");
btn2 = document.querySelector("#submit2");

btn1.addEventListener("click", changeuser);
btn2.addEventListener("click", changepay);
