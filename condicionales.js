console.log('Condicionales:');
//if
var numerito = 10;
var booleanito = false;
if (numerito >= 0) {
    console.log('Es un numero positivo');
    if (booleanito) {
        console.log('Y booleanito es true');
    }
}
//switch
var menu;
(function (menu) {
    menu[menu["menu1"] = 1] = "menu1";
    menu[menu["menu2"] = 2] = "menu2";
    menu[menu["menu3"] = 3] = "menu3";
})(menu || (menu = {}));
var numberEx = 1;
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
