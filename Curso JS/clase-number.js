//1.tipo entero
const entero = 42;
const decimal = 3.14;
// javscript a ambos los va reconocer como tipo number osea que nos los a va reconocer a uno por decimal y otro por otro  si que ambos van hacer de tipo numero.
console.log(typeof entero, typeof decimal);

//2. Notacion cientefica
const cientifico = 5e3;

//3. numeros infinitos y NaN(este se denomina como no numeros)
const infinito = Infinity;
const noEsUnNumero = NaN;

//Operaciones Aritmeticas

//1.suma, resta, multiplicacion y division.
const suma = 5 + 6;
const resta = 5 - 6;
const multiplicacion = 5 * 6;
const divicion = 5 / 6;

//2. Modulo y Exponenciacion.
const modulo = 5 % 6;
const exponenciacion = 5 ** 6;

// Precision
const resultado = 0.1 + 0.2;
console.log(resultado);
// toFixed lo que hace es convertir el decimal en un solo numero dependiendo del paremetro que le des.
console.log(resultado.toFixed(1));
//javascript no es preciso sumando este tipo de datos por eso nos bota false en la consola.
console.log(resultado === 0.3);

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aletorio = Math.floor(Math.random());

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aletorio);
