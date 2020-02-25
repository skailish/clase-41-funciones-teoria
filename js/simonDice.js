// Simón dice II(de estructuras de control: bucles) agregándole las siguientes funcionalidades:

// La posibilidad de elegir entre un modo de juego u otro:
// MODO CLASICO: rondas limitadas(preguntar cúantas).Si se llega a esa cantidad de rondas sin perder, se gana la partida.
// MODO SUPERVIVENCIA: rondas ilimitadas hasta que se pierda.
// La posibilidad de seguir jugando una nueva partida una vez terminada la anterior.
// La posibilidad de elegir los colores del juego(en vez de rojo, azul, verde, amarillo) y la cantidad(mínimo 4)
// La posibilidad de ver un historial con los resultados.Por ejemplo:
// [1] MODO SUPERVIVENCIA: 5 colores. 15 rondas ganadas.
// [2] MODO CLASICO: 10 rondas. 4 colores.Derrota en ronda 8.
// [3] MODO CLASICO: 12 rondas. 6 colores.Partida ganada.
// [4] MODO SUPERVIVENCIA: 4 colores. 18 rondas ganadas.
// Un menú para acceder a las distintas opciones del programa.Por ejemplo:
// Modo actual: SUPERVIVENCIA.
// Colores actuales: verde, lila, azul, negro, amarillo.
// Partidas jugadas: 4.

//     - INICIAR JUEGO
//         - CAMBIAR MODO
//             - CAMBIAR COLORES
//                 - VER HISTORIAL DE PARTIDAS
//                     - SALIR


//==== FUNCIONES ====//

//// MODOS DE JUEGO
const partidaClasico = (rondasUsuario, listaColores) => {
    let validarSecuencia = true;
    // parametros iniciales de juego
    const secuenciaSimon = [];
    let secuenciaUsuario = [];
    rondasUsuario = Number(prompt("Defina la cantidad de rondas"));
    for (i = 0; (i < rondasUsuario) && validarSecuencia; i + 1) {
        // SIMON DICE +
        secuenciaSimon.push(listaColores[Math.floor(Math.random() * listaColores.length)]) // array que va diciendo simon

        alert(`Ronda: ${i + 1}. Quedan: ${rondasUsuario - (i + 1)} rondas.
        Simón Dice:
            ${secuenciaSimon}`)

        // USUARIO DICE +
        secuenciaUsuario = (prompt(`¿Qué dijo Simón? Escriba sin espacios`).replace(" ", "")).split(",");

        // valido las secuencias
        validarSecuencia = compararSecuencia(secuenciaUsuario, secuenciaSimon);
    }

    // se terminaron las rondas, chequeo si ganó o perdió
    if (validarSecuencia) {
        alert(`Ganaste! Sobreviviste las ${rondasUsuario} rondas definidas`)
        historial[0][1]++;
    } else {
        alert(`Perdiste. La respuesta era: ${secuenciaSimon}.
        Dijiste ${secuenciaUsuario}.
        Sobreviviste un total de ${i + 1} rondas`)
        historial[1][1]++;
    }

    return validarSecuencia
}

const partidaSupervivencia = (listaColores) => {
    // parametros iniciales de juego
    const secuenciaSimon = [];
    let secuenciaUsuario = [];
    let validarSecuencia = true;

    /// bucle de juego
    while (validarSecuencia) {
        // SIMON DICE +
        secuenciaSimon.push(listaColores[Math.floor(Math.random() * listaColores.length)]) // array que va diciendo simon
        alert(`Simón Dice:
            ${secuenciaSimon}`)

        // USUARIO DICE +
        secuenciaUsuario = (prompt(`¿Qué dijo Simón? Escriba sin espacios`).replace(" ", "")).split(",");

        // VALIDO
        validarSecuencia = compararSecuencia(secuenciaUsuario, secuenciaSimon);

        // se terminaron las rondas, chequeo si ganó o perdió
        if (!validarSecuencia) {
            alert(`Perdiste. La respuesta era: ${secuenciaSimon}.
        Dijiste ${secuenciaUsuario}.`)
            historial[1][1]++;
        }
    }
    // sumo al historial
    if (validarSecuencia) {
        historial[0][1]++;
    } else {
        historial[1][1]++;
    }
    return validarSecuencia;
}

//// PARTIDA
const inicioJuego = (modoJuego) => {
    switch (modoJuego) {
        case 1: {
            validarSecuencia = partidaClasico(rondasUsuario, listaColores, historial);
        }
            break
        case 2: {
            validarSecuencia = partidaSupervivencia(listaColores, historial);
        }
            break

        default:
            validarSecuencia = alert("Elija un modo de juego válido");
    }
    return validarSecuencia;
}


//// VALIDAR SECUENCIA DE USUARIO
const compararSecuencia = (secuenciaUsuario, secuenciaSimon) => {
    let validar = true;
    if (secuenciaUsuario.length === secuenciaSimon.length) {
        for (i = 0; i < secuenciaSimon.length; i++) {
            if (secuenciaSimon[i] !== secuenciaUsuario[i]) {
                validar = false;
            }
        }
    } else {
        validar = false;
    }
    return validar;
}

//==== VARIABLES GLOBALES ====//
const menu = `
(1) INICIAR JUEGO
(2) CAMBIAR MODO
(3) CAMBIAR COLORES
(4) VER HISTORIAL DE PARTIDAS
(5) SALIR`;

let historial = [["Ganados: ", 0], ["Perdidos: ", 0]]; // para el historial de jugadas
let modoJuego = 1; // modo predefinido
let listaColores = ["rojo", "azul", "verde", "amarillo"]; // colores predefinidos
let opcion = 1; // variable de opción predefinida
let rondasUsuario = 0;


while (opcion !== 5) {
    opcion = Number(prompt(`Historial de partidas: ${historial}.
    Modo actual= ${modoJuego}. 
    Lista de colores actual: ${listaColores}.

    ELija una opción para comenzar: ${menu}`));

    switch (opcion) {
        case 1: {
            inicioJuego(modoJuego);
        }
            break

        case 2: {
            modoJuego = Number(prompt("Escriba '1' para 'Modo Clásico' donde puede definir la cantidad de rondas a jugar o '2' para 'Modo Supervivencia' (rondas infinitas hasta perder)")); // MODO - puede modificarse si decide jugar más de una partida

        }
            break

        case 3: {
            listaColores = prompt(`Lista de colores actual: ${listaColores}.
            Indique la nueva lista de colores, separada por comas`).replace(" ", "").split(",");
        }
            break

        case 4: {
            alert(historial);
        }
            break

        case 5: {
            alert("Adios!");
        }
            break

        default:
            alert("Ingrese una opción válida")

    }


}

alert(`Resumen:
${historial}`)