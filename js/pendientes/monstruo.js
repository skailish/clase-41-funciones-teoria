// Monstruo

// Crear un juego de combate contra un monstruo.El juego debe contar con las siguientes variables:
// Vida jugadora
// Vida monstruo
// Cantidad de pociones
// Ataque máximo jugadora
// Ataque máximo monstruo
// Curación máxima poción
// Todos los valores anteriores deben ser números enteros
// El juego debe tener las siguientes acciones posibles:
// ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque máximo jugadora y lo resta a Vida monstruo
// TOMAR POCION: genera un número aleatorio entre 1 y Curación máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de pociones
// BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
// SALIR: termina el programa
// En todo momento se debe mostrar un mensaje de lo que está pasando
// Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
// Luego del ataque del monstruo, se debe mostrar la vida de ambos
// El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// Mostrar un mensaje con el resultado final

// defino las variables dinámicas
let vidaJugadora = 100;
let vidaMonstruo = 100;
let cantidadPociones = 5;
let ataqueMaximoJugadora = 50;
let ataqueMaximoMonstruo = 50;
let curacionMaximaPocion = 50;
let encuentraPocion = 0;
let jugada = "";


// defino el mensaje de opciones
const opciones = `Elija una opción:
1- ATACAR MONSTRUO
2- TOMAR POCION
3- BUSCAR POCION
4- SALIR`;


// pregunto primera accion
let accion = prompt(opciones);



while ((vidaJugadora > 0) && (vidaMonstruo > 0) && (accion != "4") && accion) {
    switch (accion) {
        case "1":
            vidaMonstruo -= Math.round(Math.random() * (ataqueMaximoJugadora - 1)) + 1;
            jugada = `Elegiste Atacar al monstruo`;
            break
        case "2":
            cantidadPociones--;
            vidaJugadora += Math.round(Math.random() * (curacionMaximaPocion - 1)) + 1;
            jugada = `Elegiste tomar una poción de curación`;
            break
        case "3":
            encuentraPocion = Math.round(Math.random() * 3) + 1;
            jugada = `Elegiste buscar una poción`;
            if (encuentraPocion === 1) {
                cantidadPociones++;
                alert(jugada + "\n Qué suerte!. Encontraste una poción.")
            } else {
                alert(jugada + "\nMala suerte. No encontraste nada.");
            }
            break
        case "4":
            jugada = "Elegiste terminar";
            break
    }
    if (vidaMonstruo > 0) {
        vidaJugadora -= Math.round(Math.random() * (ataqueMaximoMonstruo - 1)) + 1;

        if (vidaJugadora > 0) {
            accion = prompt(
                `Última jugada: ${jugada}
                El monstruo te atacó.
                
                Vida Jugadora: ${vidaJugadora}
                Vida Monstruo: ${vidaMonstruo}
        
                ${opciones}`);
        } else {
            alert("Perdiste!");
        }
    } else {
        alert("Ganaste!")
    };

    if (vidaJugadora > 100) {
        vidaJugadora = 100;
    };
    if (vidaMonstruo > 100) {
        vidaMonstruo = 100;
    };
};


if (!accion) {
    jugada = "No se eligió una acción válida";
};

alert(`
Última jugada: ${jugada}

Resultado final:
Vida Jugadora: ${vidaJugadora}
Vida Monstruo: ${vidaMonstruo}`);