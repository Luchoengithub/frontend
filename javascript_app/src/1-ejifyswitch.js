console.log('--------Alcance de Variables----------');


var variableGlobal =' Variable de alcance Global ';
const varConstante = ' Variable Constante ';
let varLetLocal = ' ABC ';
let varLetNumero = 1112;

console.log(' Variable Global 1, ' + varLetNumero);

console.log(' Constante = ' + varConstante);

{
    variableGlobal = ' Otro Valor ';
    console.log(' Variable Global 2, ' + variableGlobal)
    let varLetLocal = 'XYZ';
    console.log(' letLocal: ' + varLetLocal);

}

console.log(' letLocal: '+ varLetLocal);

let evaluacionIf = false;


if (true) {
    console.log(' Adentro del if ');

    let letNumeroY = 11;
    let letNumeroX = 76;
    
    console.log(' Operacion * = '+ (letNumeroX * letNumeroY));

}else{

    console.log(' Estamos en el else del if ');

}




console.log('+----------------Selector-------------------+');

let letKey = 2;

switch (letKey) {
    case 1:
        
        console.log(' Caso 1 ');

        break;

    case 2:
        
        console.log('Caso 2');

        break;

    case 3: 

        console.log('Caso 3');

        break;

    default:
        console.log(' valor no determinado en el selector ');

        break;
}
