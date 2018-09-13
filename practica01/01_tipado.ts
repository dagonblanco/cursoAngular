// Tipos de datos primitivos

// String 
let saludo: string;
saludo = 'Hola Mundo';

// Number
let cantidad: number;
cantidad = 9.5;

// Boolean
let isHappy: boolean;
isHappy = false;

// Arrays
let claves: string[];
let valores: Array<string>;

claves = ['alpha', 'bravo'];

// Any (elimina inferencia de tipos en asignación inicial)
let income: any = 'No asignado';
income = 50;

// Enum
enum Header { id, version, channel };
let header: Header = Header.id;

// Enum con valores
enum TallaUK { uk5 = 42, uk4 = 40 };
let talla: TallaUK = TallaUK.uk4;

// Void
function procesarSaludo(): void {
    // return 'Error de compilación';
}

// Undefined
let indefinida: undefined = null;

// Tipado de objetos

let jugador1: object;
jugador1 = { name: 'Pepe', edad: 40 };

let jugador2: { posicion: string, salario: number };
//jugador2.salario='muchismo'; // No compila

// Tipos de unión

type id = string | number;
let ean: id;
ean = 40;
ean = 'XX';
// No compila: ean = false;

type raza = 'Pastor Alemán' | 'Mastín Leonés' | 'Chihuahua' | 'Otro';
let razaToby: raza = 'Chihuahua';

// Tipado en funciones
function suma(a: number, b: number): number {
    // No complia: return 'Sumado';
    return a + b;
}

// Parámetros opcionales
function multiplica(a: number, b: number, mensaje?: string) {
    let resultado = a + b;
    return mensaje ? mensaje + resultado : `Multiplicacion resultó ${resultado}`;
}

// Tipos genéricos (definición en tiempo de ejecución)

function devuelveResultado<T> (a:T):T {
    return a;
}

let b:string = devuelveResultado<string>('Aprobado');
let c:number = devuelveResultado<number>(5);