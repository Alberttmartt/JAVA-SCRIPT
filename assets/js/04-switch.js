
const edad = 20;
let imprimir ='';
const texto = 'hola';

switch(edad){
    case 18 :
        imprimir = 'Mensaje 18'
        console.log(18);
    break;
    case 20:
        imprimir ='Mensaje 20'
    break;
    case 50:
        imprimir ='Mensaje 50'
    break;
    case 'hola': 
    imprimir = 'hola';
    break;

    default:
    imprimir = 'este es un mensaje por defecto'
    break;


}
    document.write('<h1>${imprimir}</h1>');
