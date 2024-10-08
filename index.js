

let nombreApellido1 = (
    prompt("ingresa el Nombre y Apellido del Primer Alumno") );
    while (nombreApellido1 === "" || !isNaN(nombreApellido1)) {
        alert("Por favor ingrese un nombre válido (no vacío y no un número)");
        nombreApellido1 = prompt("Ingresa el Nombre y Apellido del Primer Alumno");
    }

    let notaUno = (
        parseFloat( prompt("ingresa la primera nota del alumno n1")));
    while (notaUno === "" || isNaN(notaUno) || notaUno > 10 || 0 >= notaUno) {
        alert ("Porfavor ingrese un numero valido del 1 al 10")
        notaUno = parseFloat ( prompt("ingresa la primera nota del alumno n1"))
    }

    let notaDos = (
        parseFloat( prompt("ingresa la Segunda nota del alumno n1")));
    while (notaDos === "" || isNaN(notaDos) || notaDos > 10 || 0 >= notaDos) {
        alert ("Porfavor ingrese un numero valido del 1 al 10")
        notaDos = parseFloat ( prompt("ingresa la segunda nota del alumno n1"))
    }

    let notaTres = (
        parseFloat( prompt("ingresa la tercera nota del alumno n1")));
    while (notaTres === "" || isNaN(notaTres) || notaTres > 10 || 0 >= notaTres) {
        alert ("Porfavor ingrese un numero valido del 1 al 10")
        notaTres = parseFloat ( prompt("ingresa la Tercera nota del alumno n1"))
    }
        
promedioAlumno1 = (notaUno + notaDos + notaTres) / 3 ;  
promedioAlumno1 = promedioAlumno1.toFixed(4);
console.log( "El promedio de " + nombreApellido1 + " es " + promedioAlumno1  );








