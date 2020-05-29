console.log('Ciclos:');
//for - para repetir de 1 a 3
for (var i = 1; i <= 3; i++) {
    console.log("a la cuenta de: " + i);
}
var personas = [
    {
        nombre: 'Fulanito 1',
        apellido: 'De tal'
    },
    {
        nombre: 'Fulanito 2',
        apellido: 'De tal'
    },
    {
        nombre: 'Fulanito 3',
        apellido: 'De tal'
    },
];
console.log(personas);
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var item = personas_1[_i];
    console.log(item.nombre);
}
//for in
for (var index in personas) {
    console.log(index);
}
console.log('==================================');
