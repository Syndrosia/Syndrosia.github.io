let Maxlb, Maxoz, Maxdra, Mainlb, Mainoz, Maindra = 0;

function print(a) {
   console.log(a);
}

function calc() {
   Maxlb = document.getElementById("Maxlb").value || 0;
   Maxoz = document.getElementById("Maxoz").value || 0;
   Maxdra = document.getElementById("Maxdra").value || 0;
   Mainlb = document.getElementById("Mainlb").value || 0;
   Mainoz = document.getElementById("Mainoz").value || 0;
   Maindra = document.getElementById("Maindra").value || 0; 

   let x = (Maxlb * 25600000) + (Maxoz * 1600000) + (Maxdra * 100000);
   let y = (Mainlb * 25600000) + (Mainoz * 1600000) + (Maindra * 100000);
   let z = ((y/x) * 100).toFixed(2);

   document.getElementById("perc").innerHTML = z + "%";

   let row = document.getElementById("tal1").insertRow(0);
   let Amax = row.insertCell(0);
   let row2 = document.getElementById("tal2").insertRow(0);
   let Amain = row2.insertCell(0);
   let row3 = document.getElementById("tal3").insertRow(0);
   let Aperc = row3.insertCell(0);

   Amax.innerHTML = String(Maxlb) + ":" + String(Maxoz) + ":" + String(Maxdra);
   Amain.innerHTML = String(Mainlb) + ":" + String(Mainoz) + ":" + String(Maindra);
   Aperc.innerHTML = String(z) + "%";

   x, y, z = 0, 0, 0;

   document.getElementById("Maxlb").value = "";
   document.getElementById("Maxoz").value = "";
   document.getElementById("Maxdra").value = "";
   document.getElementById("Mainlb").value = "";
   document.getElementById("Mainoz").value = "";
   document.getElementById("Maindra").value = "";
}
