const { match } = require('assert');

const readline = require('readline');

let teclado = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

teclado.question(`numero:`, function(data){

    var numeroArreglo = [] = data.split("");

    var resultado = 0;

    for (let i = 0; i < numeroArreglo.length; i++) {

        for (let j = 0; j < numeroArreglo.length; j++) {

            if (numeroArreglo[i] > numeroArreglo[j]) {

                if (numeroArreglo[i] > resultado){ resultado = numeroArreglo[i] }
            } 
        }          
    }

    console.log(`El numero mayor es: ${resultado}`);
    teclado.close();

});