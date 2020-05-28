// impresion en consola
console.log('Tipos de datos:');

//tipos numericos
var numerito: number = 15;
console.log(numerito);

//tipo texto
var texto: string = 'Esto es un texto';
// texto=100; no lo recono por ser un string
console.log(texto);
//concatenar strings
var nombre: string = 'Carlos';
var apellido: string = 'Echeverria';
var nombre_completo = nombre + ' ' + apellido;
console.log('hola' + ' ' + nombre_completo);

//tipo boolean
var booleano: boolean = true;
console.log(booleano);
var boolMath: boolean = 10 + 1 == 15;
console.log(boolMath);
//Las operaciones logicas con booleanos son &&, ||, !, ==
var boolOperation: boolean = booleano || boolMath;
console.log(boolOperation);

//tipo objeto
var persona = {
  nombre: 'Josehny',
  apellido: 'Jimenez',
  sexo: 'femenino',
};
console.log(persona);
console.log(persona.nombre);

//tipo interfaces
interface Personas {
  nombre: string;
  apellido: string;
  sexo: string;
}
var persona1: Personas = {
  nombre: ' Carlos',
  apellido: ' Echeverria',
  sexo: 'masculino',
};
console.log(persona1);
console.log(persona1.nombre);

//tipo any
var variable: any = 14;
variable = 'Asignando otro valor de otro tipo';
console.log(variable);

//tipo array
var lista: Array<string> = ['cambur', 'lechosa', 'parchita', 'uva'];
console.log(lista);
console.log(lista[3]);

//tipo enum
enum menu {
  menuO1 = 1,
  menuO2 = 2,
  menuO3, // si viene enumerandose desde el primer atributo toma un valor
}
console.log(menu.menuO1);
