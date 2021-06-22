const edad = parseInt(prompt('Ingresa tu edad'));
const nombre = prompt('ingresa tu nombre');

if( edad >=18  && edad <=29) {
   /*  console.log(`hola felicidades ${nombre}, has sido aceptado en el programa`);   */
    document.write(`<h1>Hola felicidades ${nombre}, has sido aceptado en el programa.</h1'`);
} 
else if (edad <60){
    document.write(`<h1>Hola ${nombre}, Generation pronto abrira cursos para adultos mayores.</h1`);
}
else{
    document.write(`<h1>Hola lo siento ${nombre}, no fuiste aceptado.</h1`);
}