//creando clases
//no aplica concepto de hoisting, debe crease antes la clase y luego crear instancias(objetos)
//IMPORTANTE: usa '_' para llamar diferencias los nombre de propiedades de los metodos
/*
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'
console.log(persona1.nombre);
 */

/*
//Herencias
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}
//crear clase hija RECORDAR: Extends
class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre, apellido)//Importante agragar esto, ya que sino, no pasaremos parametros al constructor padre y quedaran vacios valores de propiedades del padre para el hijo.
        //sirve para rellenar los valores del contrucstor padre. 
        this._dep = dep;
    }
    get dep(){
        return this._dep;
    }
    set dep(dep){
        this._dep= dep;
    }
}

let persona1 = new Persona('Juan', 'Perez');

let empleado1 = new Empleado('Miguel','Explotado', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
*/

/*
//agregando metodos al padre, y usar sobreescritura con super
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre+' '+this.apellido;
    }
}
//creando clase hija 
class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre, apellido)//
        this._dep = dep;
    }
    get dep(){
        return this._dep;
    }
    set dep(dep){
        this._dep= dep;
    }
    //Sobrescritura: modificar metodo de la clase padre
    nombreCompleto(){
        //super es para acceder a atributos y metodos de la clase padre
        return super.nombreCompleto()+' de '+this._dep;
    }
}

let empleado1 = new Empleado('Miguel', 'Explotado', 'Sistemas');
console.log(empleado1.nombreCompleto());
*/
//Object.prototipy.toString, polimorfismo
/*
class Persona{ //Hereda propiedades del padre OBJECT, padre de todos en js
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre+' '+this.apellido;
    }
    //Reescribiendo el metodo de la clase padre(Object)
    toString(){
        //se aplica polimorfismo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre, apellido);
        this._dep = dep;
    }
    get dep(){
        return this._dep;
    }
    set dep(dep){
        this._dep= dep;
    }
    nombreCompleto(){
        return super.nombreCompleto()+' de '+this._dep;
    }
}

let empleado1 = new Empleado('Miguel', 'Explotado', 'Sistemas');

console.log(empleado1.toString());
POLIMORFISMO: el metodo el cual sera ejecutado dependera de con cual objeto estemos trabajando 
toString sireve para mostrar en navegadores los valores de nuestros objetos */

//Usando STATIC, ES UNA FUCNION Q SOLAMENTE PUEDE USARSE CON LAS CLASES
/* 
class Persona{ //Hereda propiedades del padre OBJECT, padre de todos en js
    static contadorPersona = 0;// atributo de la calse

    email = 'valor defaul';//atributo de nuestros objetos
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorPersona +=1;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre+' '+this.apellido;
    }
    //Reescribiendo el metodo de la clase padre(Object)
    toString(){
        //se aplica polimorfismo
        return this.nombreCompleto();
    }

    static saludar(persona){
        console.log("saludos " +persona._nombre); 
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre, apellido);
        this._dep = dep;
    }
    get dep(){
        return this._dep;
    }
    set dep(dep){
        this._dep= dep;
    }
    nombreCompleto(){
        return super.nombreCompleto()+' de '+this._dep;
    }
}

let empleado1 = new Empleado('Gio', 'Explotado', 'Sistemas');

let persona1 = new Persona('Paco','Mikwer');

console.log(Persona.email);

*/
/*
class Persona{ 
    static contadorPersona = 0; 

    static get max(){
        return 5;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona =++ Persona.contadorPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._idPersona+' '+this._nombre+' '+this.apellido;
    }
    toString(){
        return this.nombreCompleto();
    }

    static saludar(persona){
        console.log("saludos " +persona._nombre); 
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre, apellido);
        this._dep = dep;
    }
    get dep(){
        return this._dep;
    }
    set dep(dep){
        this._dep= dep;
    }
    nombreCompleto(){
        return super.nombreCompleto()+' de '+this._dep;
    }
}

let empleado1 = new Empleado('Gio', 'Explotado', 'Sistemas');

let persona1 = new Persona('Paco','Mikwer');

console.log(Persona.max);
*/
