const alumnos = [];

class Alumno {
  constructor(nombre, notaUno, notaDos, notaTres) {
    this.nombre = nombre;
    this.notaUno = notaUno;
    this.notaDos = notaDos;
    this.notaTres = notaTres;
  }
  calculadoraDePromedios = () => {
    return (this.notaUno + this.notaDos + this.notaTres) / 3;
  };
}

const cantidadDeAlumnos = parseFloat(prompt(`Ingresa la cantidad de alumnos`));

for (let i = 0; i < cantidadDeAlumnos; i++) {
  let nombreApellido1 = prompt(
    "Ingresa el Nombre y Apellido del Alumno " + (i + 1)
  );
  while (true) {
    if (nombreApellido1 === null) {
      alert(`Proceso cancelado`);
      break;
    } else {
      while (nombreApellido1 === "" || !isNaN(nombreApellido1)) {
        alert("Por favor ingrese un nombre válido (no vacío y no un número)");
        nombreApellido1 = prompt(
          `Ingresa el Nombre y Apellido del Alumno ${i + 1}`
        );
      }
      let notaUno = parseFloat(
        prompt(`Ingresa la primera nota del alumno ${i + 1}`)
      );
      while (isNaN(notaUno) || notaUno < 0 || notaUno > 10) {
        alert("Por favor ingrese un número válido del 0 al 10");
        notaUno = parseFloat(
          prompt(`Ingresa la primera nota del alumno ${i + 1}`)
        );
      }
      let notaDos = parseFloat(
        prompt(`Ingresa la segunda nota del alumno ${i + 1}`)
      );
      while (isNaN(notaDos) || notaDos < 0 || notaDos > 10) {
        alert("Por favor ingrese un número válido del 0 al 10");
        notaDos = parseFloat(
          prompt(`Ingresa la segunda nota del alumno ${i + 1}`)
        );
      }
      let notaTres = parseFloat(
        prompt(`Ingresa la tercera nota del alumno ${i + 1}`)
      );
      while (isNaN(notaTres) || notaTres < 0 || notaTres > 10) {
        alert("Por favor ingrese un número válido del 0 al 10");
        notaTres = parseFloat(
          prompt(`Ingresa la tercera nota del alumno ${i + 1}`)
        );
      }

      let nuevoAlumno = new Alumno(nombreApellido1, notaUno, notaDos, notaTres);
      alumnos.push(nuevoAlumno);

      let promedioAlumno = nuevoAlumno.calculadoraDePromedios();
      console.log(
        `El promedio de ${nombreApellido1} es ${promedioAlumno.toFixed(2)}`
      );

      if (promedioAlumno < 7) {
        alert(`El Alumno ${nombreApellido1} desaprobó`);
      } else {
        alert(`El Alumno ${nombreApellido1} aprobó`);
      }
      break;
    }
  }
}

console.table(alumnos);
const aprobados = alumnos.filter(
  (alumnos) => alumnos.calculadoraDePromedios() >= 7
);
const desaprobados = alumnos.filter(
  (alumnos) => alumnos.calculadoraDePromedios() < 7
);
console.log(`Los alumnos que aprobaron son `, aprobados);
console.log(`Los alumnos desaprobados son`, desaprobados);

const AlumnoB = [];
