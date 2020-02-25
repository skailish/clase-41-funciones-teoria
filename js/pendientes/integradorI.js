// Integrador 1

// 🛒 Una clienta nos pidió que hagamos un programa para su tienda online.


// ⬇️ El flujo del programa debería ser el siguiente:


// 1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
// 2. Mostrarle los productos en promoción(2 productos)
// 3. Preguntarle si quiere comprar el producto 1.
// a.Si responde "SI" preguntar cuántas unidades va a llevar
// 4. Preguntarle si quiere comprar el producto 2.
// a.Si responde "SI" preguntar cuántas unidades va a llevar
// 5. Mostrar el detalle de la compra con:
// - subtotales de cada producto(precio x cantidad)
//     - total(suma de subtotales)
// 6. Preguntar si desea abonar con tarjeta de crédito
// a.Si responde "SI" preguntar en cuántas cuotas desea abonar
// 7. Mostrar el detalle de la compra con:
// - subtotales de cada producto(precio x cantidad)
//     - total(suma de subtotales)
//     - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
// 8. Preguntar si tiene un código de descuento
//     - si la respuesta es "SÍ", pedir que ingrese el código
//         - mostrar si el código ingresado es correcto o incorrecto
// 9. Mostrar el detalle de la compra con:
// - subtotales de cada producto(precio x cantidad)
//     - total(suma de subtotales)
//     - si tiene código y lo ingresó bien, mostrar el descuento y el total final
//         - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
// 10. Mostrar un saludo de despedida

// ❗ Se requiere definir variables para los siguientes valores(para poder utilizarlas luego)

// Nombre de la tienda
// Nombre de producto 1
// Nombre de producto 2
// Precio de producto 1
// Precio de producto 2
// Código de descuento


const nombreTienda = "AdaLovelace";
const mediasLargas = "medias largas";
const mediasZoquetes = "zoquetes";
const precioLargas = 150;
const precioZoquetes = 95;
const codigoDescuento = "ada2020";
const valorDescuento = 25;
let nombreClienta = "";
let tieneCodigo = "";
let tieneTarjeta = "";
let detalleCompra = "";
let detalleCuotas = "";
let detalleDescuento = "";
let unidadesLargas = 0;
let unidadesZoquetes = 0;
let cuotas = 0;
let totalDescuento = 0;
let precioTotal = 0;
let precioCadaCuota = 0;


// PUNTO 1
nombreClienta = prompt(`Buenas tardes, bienvenidx a ${nombreTienda} online.
¿Cuál es su nombre?`);


//PUNTO 2
alert(`Hola ${nombreClienta}! Hoy tenemos superpromociones en:
- ${mediasLargas}: $${precioLargas}
- ${mediasZoquetes}: $${precioZoquetes}`);

//PUNTO 3
const aceptaLargas = confirm(`Desea adquirir ${mediasLargas}?`);
if (aceptaLargas) {
    unidadesLargas = Number(prompt(`¿Cuántas desea llevar?`));
    precioTotal += Number(unidadesLargas * precioLargas);
    detalleCompra += '\n-' + unidadesLargas + ' par de ' + mediasLargas + ' por un total de ' + '$' + (unidadesLargas * precioLargas);
};

//PUNTO 4
const aceptaZoquetes = confirm(`Desea adquirir ${mediasZoquetes}?`);
if (aceptaZoquetes) {
    unidadesZoquetes = Number(prompt(`¿Cuántas desea llevar?`));
    precioTotal += Number(unidadesZoquetes * precioZoquetes);
    detalleCompra += '\n-' + unidadesZoquetes + ' par de ' + mediasZoquetes + ' por un total de ' + '$' + (unidadesZoquetes * precioZoquetes);
}

let saludo = `Gracias  ${nombreClienta} \nDetalle de su compra\n ${detalleCompra} \nPrecio total: $${precioTotal}\n`;

// PUNTO 5
if (!aceptaLargas && !aceptaZoquetes) { // no compró nada
    alert(`Gracias ${nombreClienta} por su visita.`)
} else { // PUNTO 6
    alert(saludo);


    // PUNTO 7
    tieneTarjeta = confirm("¿Desea pagar con tarjeta de crédito?");

    if (tieneTarjeta) {
        cuotas = Number(prompt("Elija la cantidad de cuotas, 3, 6 u 12?"));
        if (cuotas == 3) {
            precioCadaCuota = Number((precioTotal + ((precioTotal * 5) / 100)) / cuotas);
            detalleCuotas = "recargo del 5% \n 3 cuotas de $";
        } else if (cuotas == 6) {
            precioCadaCuota = Number((precioTotal + ((precioTotal * 10) / 100)) / cuotas);
            detalleCuotas = "recargo del 10% \n 6 cuotas de $";
        } else if (cuotas == 12) {
            precioCadaCuota = Number((precioTotal + ((precioTotal * 25) / 100)) / cuotas);
            detalleCuotas = "recargo del 25% \n 12 cuotas de $";
        } else {
            precioCadaCuota = "";
            detalleCuotas = "Abona al contado";
        }
    } else {
        precioCadaCuota = "";
        detalleCuotas = "Abona al contado";
    }


    // PUNTO 8

    alert(`${saludo}
    
    CUOTAS
    ${detalleCuotas}${precioCadaCuota}`);

    // PUNTO 9
    tieneCodigo = confirm("¿Tiene código de descuento?");

    if (tieneCodigo) {
        tieneCodigo = prompt("Ingrese el código de descuento");

        if (codigoDescuento == tieneCodigo) {
            alert("El código es correcto");
            totalDescuento = Number(precioTotal * (valorDescuento / 100));
            detalleDescuento = "Precio total con descuento: $" + (precioTotal - totalDescuento);
            precioCadaCuota -= Number(totalDescuento / cuotas);

        } else {
            alert("El código ingresado es incorrecto");
            detalleDescuento = "No ingresó un código de descuento correcto";
        }

    } else {
        detalleDescuento = "No tiene código de descuento";
    }

    // PUNTO 10

    alert(`${saludo}

    DESCUENTO 
    ${detalleDescuento}
    
    CUOTAS
    ${detalleCuotas}${precioCadaCuota}
    
    Hasta pronto.`);

}

