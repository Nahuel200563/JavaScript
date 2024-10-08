const aplicarDescuento = (precio, descuento) => {
    precioConDescuento = precio - (precio * descuento) / 100;
    return precioConDescuento;
  };
  
  const calcularImpuestos = (precio) => {
    precioConImpuestos = precio + precio * 0.21;
    console.log(precioConImpuestos);
    return precioConImpuestos;
  };
  
  let totalDeProductos = 0;
  let agregar = confirm("quieres agregar un producto");
  
  while (agregar) {
    let precioDelProducto = parseFloat(
      prompt("Por favor ingresa el precio del producto")
    );
  
    if (!isNaN(precioDelProducto) && precioDelProducto > 0) {
      const precioConIva = calcularImpuestos(precioDelProducto);
      totalDeProductos += precioConIva;
      alert("producto agregado satisfactoriamente");
  
      agregar = confirm("Quires agregar otro producto?");
    } else {
      alert("Precio invalido");
    }
  }
  
  if (totalDeProductos > 0) {
    let descuento = parseFloat(
      prompt("por favor ingresa el porcentaje de descuento")
    );
  
    const precioFinal = aplicarDescuento(totalDeProductos, descuento);
    alert(`El precio final de tu compra es : ${precioFinal}`);
  } else {
    alert("No has agregado ningun producto");
  }