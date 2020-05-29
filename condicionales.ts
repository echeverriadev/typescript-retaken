console.log('Condicionales:');

//if
var numerito: number = 10;
var booleanito: boolean = false;
if (numerito >= 0) {
  console.log('Es un numero positivo');
  if (booleanito) {
    console.log('Y booleanito es true');
  }
}

//switch
enum menu {
  menu1 = 1,
  menu2 = 2,
  menu3, // si viene enumerandose desde el primer atributo toma un valor
}

var numberEx: number = 1;
switch (numberEx) {
  case menu.menu1: {
    console.log('Menu 1');
    break;
  }
  case menu.menu2: {
    console.log('Menu 2');
    break;
  }
  case menu.menu3: {
    console.log('Menu 3');
    break;
  }
  default: {
    console.log('Cualquier opcion');
  }
}

//Ternarios
booleanito //si es true
  ? console.log('booleanito es true') // imprimir si es true
  : console.log('booleanito es false'); // imprimir si es false

console.log('==================================');
