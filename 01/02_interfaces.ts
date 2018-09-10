// Interfaces para la definición de estructuras de objetos

interface Jugador {
    nombre: string;
    apellidos: string;
    edad: number;
    poscion?: string; //opcional
}

let jugador1: Jugador = {
    nombre: 'Bryan',
    apellidos: 'Adams',
    edad: 30
    //No compila: ,activo: true
}