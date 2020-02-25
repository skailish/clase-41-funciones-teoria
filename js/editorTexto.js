// Editor de texto Hacer un programa que sea un mini editor de texto.El programa debe inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer.Opciones:
// "duplicar": duplicar el texto
// "reemplazar": reemplaza un string por otro en el texto
// "agregar": agregar texto
// "cortar": pide dos números de índice entre los cuáles recortar el texto
// "eliminar palabra": elimina una palbra del texto
// "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "mayusculas": poner todo el texto a mayusculas
// "minusculas": poner todo el texto en minusculas
// "contar letras": mostrar cuántas letras tiene el texto sin espacios
// "contar palabras": mostrar cuántas palabras tiene el texto
// "h4ck3r 5p34k": convierte el texto en "Hacker Speak"
// Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones.Investigar métodos toUpperCase, toLowerCase, replace, includes, slice, substring.

//// === FUNCIONES === ////
//  duplicar el texto
const duplicarTexto = (textoEditado) => {
    let nuevoTexto = textoEditado;
    nuevoTexto = textoEditado + " " + textoEditado;
    return nuevoTexto
}

//  reemplazar el texto
const reemplazarTexto = (textoEditado) => {
    let nuevoTexto = textoEditado;
    const reemplazarTexto = prompt("Escriba la parte del texto que quiere reemplazar");
    const reemplazarPorTexto = prompt("Escriba el nuevo texto");
    while (nuevoTexto.includes(reemplazarTexto)) {
        if (nuevoTexto.includes(reemplazarTexto)) {
            nuevoTexto = nuevoTexto.replace(reemplazarTexto, reemplazarPorTexto)
        } else {
            alert(reemplazarTexto + " - no se encuentra en su texto. Texto actual: \n" + textoEditado);
        }
    }

    return nuevoTexto;
}

//  agregar
const agregarTexto = (textoEditado) => {
    let nuevoTexto = textoEditado;
    nuevoTexto += " " + prompt("Ingrese el texto a añadir.");
    return nuevoTexto;
}

//  cortar el texto
const recortarTexto = (textoEditado) => {
    let nuevoTexto = textoEditado;
    let indexInicio = Number(prompt("Defina la posición inicial del corte"));
    let indexFinal = Number(prompt("Defina la posición final del corte"));

    let extracto = String(nuevoTexto.slice(indexInicio, (indexFinal - indexInicio)));
    nuevoTexto = nuevoTexto.replace(extracto, "");

    return nuevoTexto;
}

//  eliminar palabra
const eliminarPalabra = (textoEditado) => {
    let nuevoTexto = textoEditado;
    let palabra = prompt("Defina la palabra o letra a eliminar");

    while (nuevoTexto.includes(palabra)) {
        nuevoTexto = nuevoTexto.replace(palabra, "");
    }

    return nuevoTexto;
}

//  Buscar subtexto
const buscarSubtexto = (textoEditado) => {
    let encuentra = textoEditado.includes(prompt("Escriba el texto buscado"));

    return `El texto buscado ${encuentra ? "se encuentra" : "no se encuentra"} en el texto.`;
}

//  Buscar palabra
const buscarPalabra = (textoEditado) => {
    let encuentra = textoEditado.includes(prompt("Escriba la palabra buscada"));

    return `La palabra buscada ${encuentra ? "se encuentra" : "no se encuentra"} en el texto.`;
}

//  mayúsculas
const pasarAMayusculas = (textoEditado) => {
    let nuevoTexto = textoEditado;
    nuevoTexto = nuevoTexto.toUpperCase()

    return nuevoTexto;
}

//  minúsculas
const pasarAMinusculas = (textoEditado) => {
    let nuevoTexto = textoEditado;
    nuevoTexto = nuevoTexto.toLowerCase()

    return nuevoTexto;
}

//  contar las letras
const contarLetras = (textoEditado) => {
    let textoSinEspacios = textoEditado.replace(" ", "");
    let contador = textoSinEspacios.length;

    return contador;
}

//  contar las palabras
const contarPalabras = (textoEditado) => {
    let textoSeparadoEnPalabras = textoEditado.split(" ");
    let contador = textoSeparadoEnPalabras.length;

    return contador;
}

// "h4ck3r 5p34k": convierte el texto en "Hacker Speak"
const hackerSpeak = (textoEditado) => {
    let nuevoTexto = textoEditado;
    nuevoTexto = nuevoTexto.replace(/[a]/gi, "4");
    nuevoTexto = nuevoTexto.replace(/[e]/gi, "3");
    nuevoTexto = nuevoTexto.replace(/[i]/gi, "1");
    nuevoTexto = nuevoTexto.replace(/[o]/gi, "0");
    nuevoTexto = nuevoTexto.replace(/[s]/gi, "5");
    return nuevoTexto;
}


//// === VARIABLES GLOBALES === ////
const menu = `
(1) Duplicar el texto
(2) Reemplaza un string por otro en el texto
(3) Agregar texto
(4) Recortar el texto
(5) Elimina una palabra del texto
(6) Buscar subtexto
(7) Buscar palabra
(8) Pasar texto a mayúsculas
(9) Pasar texto a minúsculas
(10) Contar las letras
(11) Contar las palabras
(12) Pasar todo el texto a "h4ck3r 5p34k".
(13) Terminar`

let textoEditado = "";
let opcion = 0;

/// PROGRAMA
const textoUsuario = String(prompt("Ingrese el texto inicial."));
textoEditado = textoUsuario;

while (opcion !== 13) {
    opcion = Number(prompt(`Su texto es:
    ${textoEditado}
    Elija una opción: ${menu}`))

    switch (opcion) {
        case 1: {
            textoEditado = duplicarTexto(textoEditado);
        }
            break

        case 2: {
            textoEditado = reemplazarTexto(textoEditado);
        }
            break

        case 3: {
            textoEditado = agregarTexto(textoEditado);
        }
            break

        case 4: {
            textoEditado = recortarTexto(textoEditado);
        }
            break
        case 5: {
            textoEditado = eliminarPalabra(textoEditado);
        }
            break

        case 6: {
            alert(buscarSubtexto(textoEditado));
        }
            break

        case 7: {
            alert(buscarPalabra(textoEditado));
        }
            break

        case 8: {
            textoEditado = pasarAMayusculas(textoEditado);
        }
            break
        case 9: {
            textoEditado = pasarAMinusculas(textoEditado);
        }
            break

        case 10: {
            alert(`El texto:
            ${textoEditado}
            La cantidad de letras es ${contarLetras(textoEditado)}`);
        }
            break

        case 11: {
            alert(`El texto:
            ${textoEditado}
            La cantidad de palabras es ${contarPalabras(textoEditado)}`);
        }
            break

        case 12: {
            textoEditado = hackerSpeak(textoEditado);
        }
            break

        case 13: {
            opcion = 13;
        }
            break
        default: {
            alert("Ingrese una opción válida")
        }
    }
}

alert(`Su texto original:
${textoUsuario}.

El texto final:
${textoEditado}.

Adios`);