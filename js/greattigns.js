let myDate = new Date();
let hrs = myDate.getHours();
let greet;

if (hrs < 12) greet = "Bom dia";
else if (hrs >= 12 && hrs <= 19) greet = "Boa tarde";
else if (hrs >= 19 && hrs <= 24) greet = "Boa noite";

let person = prompt("Digita teu nome");
if (person != null) {
  alert(greet + ", " + person + "! Vamos Começar!");
}



if(typeof(Storage)!=="undefined")
  {
  localStorage.showUsername=person;
  }
console.log(localStorage.showUsername)