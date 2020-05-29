console.log('Classes');

class Alumno {
  public nombre: string;
  public apellido: string;
  private peso: string; //es ideal usar atributos privados

  constructor() {
    console.log('INSTANCIANDO UN ALUMNO');
  }

  saludarAlumno(): void {
    console.log(`Hola ${this.nombre}`);
  }

  asignValues(nombre: string, apellido: string): void {
    this.nombre = nombre;
    this.apellido = apellido;

    this.saludarAlumno();
  }
}

var alum1: Alumno = new Alumno();
alum1.nombre = 'Carlos';
alum1.apellido = 'Echeverria';
alum1.saludarAlumno();

var alum2: Alumno = new Alumno();
alum2.asignValues('Josephny', 'Jimenez');

console.log('==================================');
