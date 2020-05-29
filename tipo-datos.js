// impresion en consola
console.log('Tipos de datos:');
//tipos numericos
var numerito = 15;
console.log(numerito);
//tipo texto
var texto = 'Esto es un texto';
// texto=100; no lo recono por ser un string
console.log(texto);
//concatenar strings
var nombre = 'Carlos';
var apellido = 'Echeverria';
var nombre_completo = nombre + ' ' + apellido;
console.log('hola' + ' ' + nombre_completo);
//tipo boolean
var booleano = true;
console.log(booleano);
var boolMath = 10 + 1 == 15;
console.log(boolMath);
//Las operaciones logicas con booleanos son &&, ||, !, ==
var boolOperation = booleano || boolMath;
console.log(boolOperation);
//tipo objeto
var persona = {
    nombre: 'Josehny',
    apellido: 'Jimenez',
    sexo: 'femenino'
};
console.log(persona);
console.log(persona.nombre);
var persona1 = {
    nombre: ' Carlos',
    apellido: ' Echeverria',
    sexo: 'masculino'
};
console.log(persona1);
console.log(persona1.nombre);
//tipo any
var variable = 14;
variable = 'Asignando otro valor de otro tipo';
console.log(variable);
//tipo array
var lista = ['cambur', 'lechosa', 'parchita', 'uva'];
console.log(lista);
console.log(lista[3]);
//tipo enum
var menu;
(function (menu) {
    menu[menu["menuO1"] = 1] = "menuO1";
    menu[menu["menuO2"] = 2] = "menuO2";
    menu[menu["menuO3"] = 3] = "menuO3";
})(menu || (menu = {}));
console.log(menu.menuO1);
console.log('==================================');
