// 1. chiedo all'utente il suo nome
var nome = prompt("Come ti chiami?");

// 2. chiedo all'utente se è maschio o femmina
var sesso = prompt("Sei maschio o femmina? (in minuscolo!)");

// 3. se input=maschio allora il nome sarà blu, altrimenti rosa
if (nome.length < 3 || sesso !== "maschio" && sesso !=="femmina") {
  alert("Inserire dati esatti!");
} else if (sesso == "maschio"){
  document.getElementById("nome").className = "color_blue";
  document.getElementById("nome").innerHTML = nome;
} else {
  document.getElementById("nome").className = "color_pink";
  document.getElementById("nome").innerHTML = nome;
}
