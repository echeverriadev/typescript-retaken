console.log('Classes');
var Alumno = /** @class */ (function () {
    function Alumno() {
        console.log('INSTANCIANDO UN ALUMNO');
    }
    Alumno.prototype.saludarAlumno = function () {
        console.log("Hola " + this.nombre);
    };
    Alumno.prototype.asignValues = function (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saludarAlumno();
    };
    return Alumno;
}());
var alum1 = new Alumno();
alum1.nombre = 'Carlos';
alum1.apellido = 'Echeverria';
alum1.saludarAlumno();
var alum2 = new Alumno();
alum2.asignValues('Josephny', 'Jimenez');
console.log('==================================');
