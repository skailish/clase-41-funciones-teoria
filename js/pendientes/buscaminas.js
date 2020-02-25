// Buscaminas

// Crear un programa que dado un array 2d permita ingresar una coordenada(representando los índices del array), y mostrar si era una casilla vacía o tenía una mina.En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas.Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó.Las minas y casillas vacías(ocultas y descubiertas) pueden representarse con emojis con con números o letras.


/* UPDATE:::: defino una función
* CLASE 41
*/

const muestroTablero = (tablero, ocultarBombas) => {
    let tableroActualizado = "";
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            // si la casilla es una bomba, muestro una caja EN CASO DE HABER PUESTO PARAMETRO "ocultarBombas"
            tableroActualizado += ocultarBombas && tablero[i][j] === "💣" ? "📦" : tablero[i][j];
        }
        tableroActualizado += "\n";
    }
    return tableroActualizado;
}


const esJugadaValida = (x, y, tablero) => {
    return jugadaValida = tablero[y] !== undefined && tablero[y][x] !== undefined && tablero[y][x] !== '💨';
}


const contarElemento = (elemento, tablero) => {
    let cantidad = 0;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === elemento) {
                cantidad++;
            }
        }
    }
    return cantidad;
}

const hayCajas = (tablero) => {
    hayCajas = contarElemento("📦", tablero) > 0;
}



////// JUEGO
const tablero =
    [
        ['📦', '💣', '💣'],
        ['📦', '📦', '📦'],
        ['💣', '📦', '📦']
    ];


let escogeBomba = false;

// Bucle del juego
while (hayCajas(tablero) && !escogeBomba) {
    // Obtengo el tablero, recorriéndolo y concatenándolo en un string

    const tableroActual = tableroActualizado(tablero, true);

    const jugada = prompt(`Ingrese las coordenadas x e y separadas por espacio, por ejemplo: 0 1 \n${tableroActual}`);

    const coordenadas = jugada.split(' ');
    const x = coordenadas[0];
    const y = coordenadas[1];

    esJugadaValida = esjugadaValida(x, y, tablero);

    if (esjugadaValida && tablero[y][x] === '📦') {
        alert('¡Casilla vacía!¡Te has salvado!');
        tablero[y][x] = '💨';
    }

    if (esjugadaValida && tablero[y][x] === '💣') {
        tablero[y][x] = '💥';
        escogeBomba = true;
    }

    if (!esjugadaValida) {
        alert('Esa no es una jugada válida');
    }
}

// Muestro el tablero finalizado con todo descubierto
const tableroFinal = tableroActualizado(tablero, false);

let resultadoFinal = '';

if (contarElemento("📦", tablero) === 0) {
    resultadoFinal = '¡Felicitaciones! Has ganado.\n'
}

if (escogeBomba) {
    resultadoFinal = '¡Oh no!¡Era una bomba!¡Has perdido!\n';
}

alert(resultadoFinal + tableroFinal);