console.log('Funciones:');

//Funciones simples
function simpleFun() {
  console.log('Funcion simple');
}

simpleFun();

//Funciones con parametros
function paramFun(name: string) {
  console.log(name);
}
paramFun('Carlos');

//Funciones con retorno de datos
function retornaDatos(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(retornaDatos(1, 3));
console.log('==================================');
