alert("Bienvenido al juego del Cachipún")
alert("Las reglas son las siguientes: El juego es entre dos jugadores, tú y la maquina. Ambos elegirán una de tres opciones (Piedra = 0 ; Tijera = 1 o Papel = 2)")
alert("Debes saber que: Tijera le gana a papel, Papel le gana a piedra, Piedra le gana a tijera y si ambos jugadores eligen la misma opción es un empate")
alert("Ahora vamos a jugar!")

let cantidadJuegos = parseInt(prompt("¿Cuántas veces desea jugar Cachipún?"));

for (i=1; i<=cantidadJuegos; i++){

    const maquina = Math.floor(Math.random()*3);
    let jugador = parseInt(prompt("Elige una opción a jugar (Piedra = 0 ; Tijera = 1 o Papel = 2)"))

    do {
        if (jugador < 0 || jugador > 2) {
            alert('[ERROR] El campo debe tener un valor entre cero y dos');
            jugador = parseInt(prompt("Elige una opción a jugar (Piedra = 0 ; Tijera = 1 o Papel = 2)"));
        }
    } while (jugador < 0 || jugador > 2);

    switch (jugador){
        case 0:
            if(jugador == maquina){
                alert(`Has elegido Piedra y la Maquina ha elegido Piedra, ha sido empate.`)
            }else if(jugador < maquina && maquina === 2){
                alert(`Has elegido Piedra y la Maquina ha elegido Papel, has sido derrotado.`)
            }else if(jugador < maquina && maquina === 1);{
                alert(`Has elegido Piedra y la Maquina ha elegido Tijera, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
        case 1:
            if(jugador == maquina){
                alert(`Has elegido Tijera y la Maquina ha elegido Tijera, ha sido empate.`)
            }else if(jugador > maquina){
                alert(`Has elegido Tijera y la Maquina ha elegido Piedra, has sido derrotado.`)
            }else if(jugador < maquina);{
                alert(`Has elegido Tijera y la Maquina ha elegido Papel, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
        case 2:
            if(jugador == maquina){
                alert(`Has elegido Papel y la Maquina ha elegido Papel, ha sido empate.`)
            }else if(jugador < maquina && maquina === 1){
                alert(`Has elegido Papel y la Maquina ha elegido Tijera, has sido derrotado.`)
            }else if(jugador < maquina && maquina === 2);{
                alert(`Has elegido Papel y la Maquina ha elegido Piedra, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
    }
}


/*do{
alert("Bienvenido al juego del Cachipún")
alert("Las reglas son las siguientes: El juego es entre dos jugadores, tú y la maquina. Ambos elegirán una de tres opciones (Piedra = 0 ; Tijera = 1 o Papel = 2)")
alert("Debes saber que: Tijera le gana a papel, Papel le gana a piedra, Piedra le gana a tijera y si ambos jugadores eligen la misma opción es un empate")
alert("Ahora vamos a jugar!")

let maquina = Math.floor(Math.random()*3);
    let jugador = parseInt(prompt("Elige una opción a jugar (Piedra = 0 ; Tijera = 1 o Papel = 2)"))

    switch (jugador){
        case 0:
            if(jugador = maquina){
                alert(`Has elegido Piedra y la Maquina ha elegido Piedra, ha sido empate.`)
            }else if(jugador < maquina && maquina == 2){
                alert(`Has elegido Piedra y la Maquina ha elegido Papel, has sido derrotado.`)
            }else if(jugador < maquina && maquina == 1);{
                alert(`Has elegido Piedra y la Maquina ha elegido Papel, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
        case 1:
            if(jugador = maquina){
                alert(`Has elegido Tijera y la Maquina ha elegido Tijera, ha sido empate.`)
            }else if(jugador > maquina){
                alert(`Has elegido Tijera y la Maquina ha elegido Piedra, has sido derrotado.`)
            }else if(jugador < maquina);{
                alert(`Has elegido Tijera y la Maquina ha elegido Papel, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
        case 2:
            if(jugador = maquina){
                alert(`Has elegido Papel y la Maquina ha elegido Papel, ha sido empate.`)
            }else if(jugador < maquina && maquina == 1){
                alert(`Has elegido Papel y la Maquina ha elegido Tijera, has sido derrotado.`)
            }else if(jugador < maquina && maquina == 2);{
                alert(`Has elegido Papel y la Maquina ha elegido Piedra, has vencido.`)
                alert(`FELICITACIONES`)
            }
        break;
    }

let continuar = prompt(parseInt("¿Desea continuar jugando? (y/n)"));
    if (continuar === y){
        continuar = false
    }else (continuar === n);{
        continuar = true
    }
}while (continuar === true)*/



