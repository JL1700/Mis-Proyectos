// tipo de dato: string

let string1 = 'Hola, mundo';
let string2 = "JavaScript es genial";
let string3 = `${string1} feliz :)`; // diferencia  con las comillas invertidas estas comillas sirven para sumar o otros textos o otros string.

//otra forma de concatenar 
let string4 = string1 + ' ' +  string2;

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

let frase = 'JavaScript es Extremadamente genial';
// el objeto length sirve para medir un string y hacerlo ver en la consola en numeros. cuenta hasta los espacios.
console.log(frase.length);
// el objeto toLowerCase es  onvertir todo un string en minusculas.
console.log(frase.toLowerCase());
//si las quisiermos todas en mayusculas deveriamos utilizar el siguiente objeto.}
console.log(frase.toUpperCase());
//El siguiente objeto es sirve para ver parte de un string quieres realizar, pero con los string se definen con indece los indece comienzan desde 0 entonces vamos a hacer un ejmplo. la palara javascript comienza en el indice 0 y termina en el indice 9 los espacios vacios tambien cuentan como indices.
console.log(frase.substring(0,9));