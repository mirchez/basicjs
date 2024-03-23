//creando un objeto

/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19
}

console.log(persona);
*/

//creando metodos
/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido;
    } 
}
console.log(persona.nombreCompleto())
*/

//Reservar espacio
/*
let persona = new Object();
persona.nombre = 'carlos';
persona.apellido = 'felino';
persona.edad = 28;
console.log(persona);
*/

/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido;
    } 
}

//console.log(persona['apellido']);
//usando for in

for (eudler in persona ){
    console.log(eudler);
    console.log(persona[eudler]);
}
*/

//eliminar y agragar propiedades objetos
/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido;
    } 
}
persona.tel= '0973114326'
console.log(persona);
//eliminar propiedad

delete persona.tel;

console.log(persona);
*/

//Imprimir objeto para navegador

/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido;
    } 
}

//concatenar 
console.log(persona.nombre + ' '+persona.apellido);

//for in
for(prop in persona){
    console.log(persona[prop]);
}

//con Object
let personaArray = Object.values(persona);
console.log(personaArray);

//con JSON
let personaString = JSON.stringify(persona);
console.log(personaString);
*/

//aplicando getter y setter
/*
let persona = {
    nombre : 'Miguel',
    apellido : 'Miranda',
    email : 'mmirandasanchez16@gmail.com',
    edad : 19,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' '+ this.apellido;
    } 
}
console.log(persona.lang);

persona.lang = 'en';

console.log(persona.idioma);
*/

//CONSTRUCTORES
/*
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre = new Persona('Miguel', 'Miranda', 'mmir@gmai.com');

console.log(padre);

let madre = new Persona('Gio', 'Brtz', 'giobrtz@gmail.com')

console.log(madre);

console.log(madre.nombreCompleto());

// simplificacion de reservar y crear objeto

let miObjeto = new Object();
let miObjeto2 = {};

//son lo mismo
*/

/*
//PROTITYPE, agrega propiedad al contructor sin directamente escribir en el( funcionara con metodos?)
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

Persona.prototype.tel='0993493434';

let padre = new Persona('Miguel', 'Miranda', 'mmir@gmai.com');

let madre = new Persona('Gio', 'Muamua', 'gio@gmai.com');
console.log(padre.tel);
*/

//USANDO METODO CALL para usar metodos de otros objetos en uno, tambien con parametros
/*
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo, tel){
        return titulo+': '+this.nombre+ ' '+this.apellido+' con telefono: '+tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//uso de call pora usar metodo de persona1 en persona 2
console.log(persona1.nombreCompleto('Verdurero', '0984343434'));
//solo funciona si tiene la misma estructura
console.log(persona1.nombreCompleto.call(persona2,'Ingeniero', '097328323'));
*/
//USANDO APPY, unica diferencia notable con call, sirve para organizar grandes datos y luego cambiarlos facilmente ya que la forma de pasar el valor a los parametros en con un array

/*
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo, tel){
        return titulo+': '+this.nombre+ ' '+this.apellido+' con telefono: '+tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}


console.log(persona1.nombreCompleto('Verdurero', '0984343434'));

let datos = ['Ing','09084434']
console.log(persona1.nombreCompleto.apply(persona2,datos));
*/
