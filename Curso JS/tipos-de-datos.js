// en javascript tenemos 10  tipos de datos y ellos se arupan en dos, que son los primitivos y complejos.

//Primitivos     //Complejos
/*/ 
string             object
number             array 
boolean            function
null
undefined
symbol
bigint
/*/

//primitivos

//string: estos son cadenas de carateres donde puedes escribir texto.

let nombre = 'jose';

//number: son numeros

let edad = 22;

//boolean

let esMayorDeEdad = true;
let noEsMayorDeEdad = false;

//null: este nos ayuda a indefintificar si un valor esta vacio.

let noHayValor = null;

// undefined: este lo que hace es verificar si un valor esta cumpliendo un parametro o una funcion. este dato no lo ultilisamos los roghramdores realmente no los da javascript cuando un valor no esta definido

let notDefinido = undefined;

// symbol
// este nos va dar un valor unico, lo podemos ultilizar por ejemplo cuando vamos a declarar el ID de usuario. ay que tener en cuenta que este tipo de dato ay siempre declararle el valor symbol entre parentesis.

let simboloUnico = Symbol('unico');

// bigint
//este nos permite almacenar valores gigantes de informacion. o numeros.

let numerosGrande = 2n

// TIPO DE DATOS COMPLEJOSZ

// Object 
// esta puede ser una variable, que tiene varias carateristicas, como por ejemplo carro el carro puede tener una marca modelo etc. los objetos van separdos por comas.

let carro = {
    Marca: 'tesla',
    modelo: 'Model S'

}

// array
// son listas o arreglos donde puedes almacenar como lo dice al principio se puede declarar un lista cosas, tambien se puede definir como un conjunto de esos grupos esto se definen dentro de corchetes. ejemplo :

let frutas = ['manzana','banana','coco','pera']

//function
//las funciones siempre se daclarar con su palabra clave funcion. estas primero se loloca un nombre y luego se le da un parametro o orden.  y luego de eso vamos a poner unas llaves donde vamos a poner el cuerpo de la funcion es decir donde le vamos a dar la orden de que es lo que va hacer es funcion. la funcion tiene muchas formas de escribirse.

function saludar (parametro) {'orden a realizar'};