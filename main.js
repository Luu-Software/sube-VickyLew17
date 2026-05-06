/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let registrada = document.getElementById("registrada");
  let distancia = document.getElementById("distancia");
  let tarifa = document.getElementById("tarifa");
  let boton = document.getElementById("boton");

  let kms = Number(distancia.value);

  
  if (registrada.value === "si") {
    if (kms <= 3) {
      tarifa = 715.24;
    }
    else if (kms <= 6) {
      tarifa = 794.94;

    }

  } else {
    // sube no registrada
  }

});
