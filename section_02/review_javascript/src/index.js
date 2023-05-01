console.log("Hola mundo!!")

// Variables y constantes

const first_name = 'Gonzalo';
let last_name = 'Salinas';

let value = 5;

if (true) {
    let first_name = 'Pedro';
    console.log('Persona de nombre ' + first_name + ' y de apellido ' + last_name + ' quiere presentar un mini proyecto en React, en menos de ' + value.toString() + ' dias.');
}

console.log('Persona de nombre ' + first_name + ' y de apellido ' + last_name + ' quiere presentar un mini proyecto en React, en menos de ' + value.toString() + ' dias.');

// Template Strings

let template_str = `Hola, me llamo ${first_name}, mi apellido es ${last_name}`;

console.log(template_str);

// Objetos

let persona_1 = {
    saludo: 'Hola <3',
    nombre: 'Ignacia',
    apellido: 'Loyola',
    edad: 26,
};

let persona_2 = {
    saludo: 'Hola',
    nombre: 'Gonzalo',
    apellido: 'Salinas',
    edad: 26,
    pareja: Object.assign({}, persona_1),
};

persona_1.apellido = 'Mosha';

console.log("Persona 1: ", persona_1);

console.log("Persona 2: ", persona_2);

// Arrays

const array_1 = [1, 2, 3, 4];
let array_2 = array_1;
// array_2.push(5);  <-- No usar ya que interviene en el objeto original.
array_2 = [...array_2, 5]; // <-- Operador spread: ...
console.log("array_1: ", array_1);
console.log("array_2: ", array_2);
let array_3 = array_2.map(function (x) {
    return x * 2;
});
console.log("array_3: ", array_3);

// Functions

function f_saludar_test(nombre) {  // <-- NO USAR
    return `Saludos ${nombre}, como estas?`;
};

const f_saludar_1 = (nombre) => {
    return `Hola ${nombre}.`;
};

const f_saludar_2 = (nombre) => `Hola ${nombre}.`;

const f_saludar_3 = (nombre) => ({
    saludo: `Hola ${nombre}.`
});

console.log("f_saludar_test: ", f_saludar_test); // No usar ya que se puede interferir con la referencia a la función.
console.log("f_saludar_1: ", f_saludar_1);
console.log("f_saludar_2: ", f_saludar_2);
console.log("TEST f_saludar_test: ", f_saludar_test("Pedro"));
console.log("TEST f_saludar_1: ", f_saludar_1("Juan"));
console.log("TEST f_saludar_2: ", f_saludar_2("Diego"));
console.log("TEST f_saludar_3: ", f_saludar_3("Gonzalo"));
console.log("TEST f_saludar_3: ", f_saludar_3("Ignacia"));

// Destructuring of Objects --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment





