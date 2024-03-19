 import React from "react";

 /* ESERCIZIO 1 
 Somma dei primi 1000 numeri naturali positivi (da 1 a 1000 compreso)? */
 function ex1 (){
  var count= 0;
   for (let i=1; i< 1001; i++){
           count = count +i;
   } 
   return ( count)
}
var risultato = ex1();


// ESERCIZIO 2 //
function somma() {
  var z = 11 + 5;
  return z;
  }
var risultato2 = somma();


export default function prova(){

return(
    <div style={{ color: 'white'}}>
      {risultato} {risultato2}
    </div>
)
 }



