const { match } = require('assert');

const readline = require('readline');

let teclado = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

teclado.question(` numero: `, function(data){

    var k=true;

    for (var j = 2; j <= data/2; j++) {

        if ((data % j) == 0) {
            k = false;
        
        }
    }

    if(k){

        console.log(`el numero es primo`);         

    }else{console.log(`el numero no es primo`);}    

    
    teclado.close();
});