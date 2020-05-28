console.log('Ciclos:');
//for - para repetir de 1 a 3
for (var i = 1; i <= 3; i++) {
  console.log(`a la cuenta de: ${i}`);
}

//for of
interface Persona {
  nombre: string;
  apellido: string;
}
var personas: Array<Persona> = [
  {
    nombre: 'Fulanito 1',
    apellido: 'De tal',
  },
  {
    nombre: 'Fulanito 2',
    apellido: 'De tal',
  },
  {
    nombre: 'Fulanito 3',
    apellido: 'De tal',
  },
];
console.log(personas);
for (let item of personas) {
  console.log(item.nombre);
}

//for in
for (let index in personas) {
  console.log(index);
}
