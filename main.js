let Maxlb = 0;
let Maxoz = 0;
let Maxdra = 0;
let Mainlb = 0;
let Mainoz = 0;
let Maindra = 0;

function calc() {
   Maxlb = document.getElementById("Maxlb").value;
   Maxoz = document.getElementById("Maxoz").value;
   Maxdra = document.getElementById("Maxdra").value;
   Mainlb = document.getElementById("Mainlb").value;
   Mainoz = document.getElementById("Mainoz").value;
   Maindra = document.getElementById("Maindra").value; 

   let x = (Maxlb * 256) + (Maxoz * 16) + (Maxdra);
   let y = (Mainlb * 256) + (Mainoz * 16) + (Maindra);
   let z = ((y/x) * 100).toFixed(1)

   document.getElementById("perc").innerHTML = z + "%"

   x = 0
   y = 0
   z = 0

   document.getElementById("Maxlb").value = ""
   document.getElementById("Maxoz").value = ""
   document.getElementById("Maxdra").value = ""
   document.getElementById("Mainlb").value = ""
   document.getElementById("Mainoz").value = ""
   document.getElementById("Maindra").value = ""

}