
//// INDICE
// Funciones puras versus funciones impuras
// efecto secundario o side effect
// - imperativo : if/else/else if switch/ for/while
// - funcional
// - orientado a objetos
//
// multiparadigmático
// programación funcional - paradigma de programación


// ===== INMUTABILIDAD (react) ===== //
// == NO MODIFICAR VALORES == //
const numbers = [4, 5, 12, 56, 23];
// posibilidad uno
const obtenerDosPrimA = (arr) => { //// NO MODIFICA EL ARRAY ORIGINAL
    return arr.slice(0, 2);
}
// posibilidad dos
const obtenerDosPrimB = (arr) => { //// MODIFICA EL ARRAY ORIGINAL
    arr.splice(2);
    return arr;
}
/// AMBOS DEVUELVEN LOS DOS PRIMEROS VALORES; PERO UNO MODIFICA LA VARIABLE ORIGINAL Y EL OTRO NO
/// EVITAR hacer funciones que modifiquen los valores originales




//==== PROGRAMACION FUNCIONAL====///
// Programación en base a funciones

// EVITAR EFECTOS SECUNDARIOS: EJEMPLOS:
///// ACCEDER A COSAS EXTERNAS
///// LLAMAR A OTRAS FUNCIONES POR SU CUENTA (sin esperar nada a cambio, si no es específicamente para uso de ESTA FUNCION)
///// MODIFICAR VALORES


const saludar = (nombre) => {
    direccion = "Santa Fe"; // EFECTO SECUNDARIO (EVITAR EVITAR EVITAR!!!)
    console.log("El nombre ingresado es " + nombre); // EFECTO SECUNDARIO (EVITAR EVITAR EVITAR!!!)
    return nombre;

}


/*
* CUANDO o QUÉ COSAS CONVERTIR A FUNCIONES
* - cuando tenemos código repetido, o código similar repetido. DRY (don't repeat yourself)
* - Simplificar el código, reducir la carga mental del código, hacerlo más declarativo // don't make me think
* - hacer funciones reutilizables que podamos acceder en otros lugares u ocasiones YAGNI(You aren't gonna need it : no hagas cosas pensando por si a futuro lo necesitarás, concentrate en lo que necesitás AHORA)
* - Validaciones
*/
