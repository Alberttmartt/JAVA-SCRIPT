const numero1 = parseInt(prompt(`Escribe  numero1`));
const numero2 = parseInt(prompt(`Escribe  numero2`));

 if (numero1==numero2) {
    document.write("<h1>Los numeros son iguales</h1>");
} 
else if (numero1 > numero2){
    document.write("<h2>El numero Mayor es "+ numero1 +"</h2>");
    document.write("<h2>El numero Menor es "+ numero2 +"</h2>");
} 
else if (numero2 > numero1){
    document.write("<h2>El numero Mayor es "+ numero2 +"</h2>");
    document.write("<h2>El numero menor es "+ numero1 +"</h2>");
}
 
 






/*  if(numero1 > numero2) {
    document.write(`<h1> El numero ${numero1} es el mayor.</h1>`);
}
else {
    document.write(`<h1> El numero ${numero2} es el menor.</h1>`);
}

    if(numero2 > numero1) {
        document.write(`<h1> El numero ${numero2} es el mayor.</h1>`);
}
else {
        document.write(`<h1> El numero ${numero1} es el menor.</h1>`);
} 
 */