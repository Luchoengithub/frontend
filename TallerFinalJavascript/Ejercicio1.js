const readline = require('readline');

let captura = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

captura.question(`Numero :  `, function(data){

    var numeroArreglo = [] = data.split("");

    var contador = numeroArreglo.length - 1;

    console.log(`Numero a la inversa : `);


    for (let i = 0; i < numeroArreglo.length; i++) {
       
        console.log(numeroArreglo[contador]);
        
        contador = contador - 1;

    }
    captura.close();
});