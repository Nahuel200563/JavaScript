function nose() {
  const numerosAlumnos = parseInt(
    document.getElementById("cantidadAlumnos").value
  );
  const notasContainer = document.getElementById("notasContainer");
  notasContainer.innerHTML = "";

  for (let i = 0; i < numerosAlumnos; i++) {
    let fila = `<input class="nombre" type="text" placeholder="Nombre Alumno ${
      i + 1
    }">`;
    for (let j = 0; j < 3; j++) {
      fila += `<input class="notitas" type="number" min="0" max="10" placeholder="Nota ${
        i * 3 + j + 1
      }">`;
    }
    fila += `<span class="promedio">Promedio: -</span>`;
    notasContainer.innerHTML += `<div class="fila">${fila}</div>`;
  }
  notasContainer.innerHTML += `<div class="boton-contenedor">
  <button id="enviarNotas">Enviar Notas</button>
  </div>`;
  document.getElementById("enviarNotas").onclick = () => {
    const filas = document.querySelectorAll(".fila");
    const aprobados = [];
    const desaprobados = [];
    const now = luxon.DateTime.now().toISO();
    console.log(`La nota se actualizó el día:`, now);
    filas.forEach((fila) => {
      const nombre = fila.querySelector(".nombre").value || "Sin nombre";
      const notas = Array.from(fila.querySelectorAll(".notitas")).map(
        (input) => parseFloat(input.value) || 0
      );
      const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
      if (promedio >= 6) {
        aprobados.push({ nombre, promedio: promedio.toFixed(2) });
      } else {
        desaprobados.push({ nombre, promedio: promedio.toFixed(2) });
      }
      fila.querySelector(
        ".promedio"
      ).textContent = `Promedio: ${promedio.toFixed(2)}`;
    });
    console.log("Aprobados:", aprobados);
    console.log("Desaprobados:", desaprobados);
    const datos = {
      aprobados: aprobados,
      desaprobados: desaprobados,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos guardados correctamente:", data);
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
  };
}
