"use strict"; // avisa cuando usamos variables no definidas
class DispositivosEntrada {
  constructor(tipo, marca) {
    this._tipoEntrada = tipo;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipo) {
    this._tipoEntrada = tipo;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivosEntrada {
  static contadorRatones = 0;
  constructor(entrada, tipo) {
    super(entrada, tipo);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `id: ${this._idRaton}, Marca: ${this._marca}, Tipo: ${this._tipoEntrada}`;
  }
}

class Teclado extends DispositivosEntrada {
  static contadorTeclados = 0;
  constructor(entrada, tipo) {
    super(entrada, tipo);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `id: ${this._idTeclado} , Marca: ${this._marca}, Tipo: ${this._tipoEntrada}`;
  }
}

class Monitor {
  static contadorMonitor = 0;
  constructor(marca, tamanho) {
    this._marca = marca;
    this._tamanho = tamanho;
    this._idMonitor = ++Monitor.contadorMonitor;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  get tamanho() {
    return this._tamanho;
  }
  set tamanho(tamanho) {
    this.tamanho = tamanho;
  }
  toString() {
    return `Marca: ${this._marca}, Tamanho: ${this._tamanho}`;
  }
}

class Computadora {
  static contadorComputadora = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._nombre = nombre;
    this._idComputadora = ++Computadora.contadorComputadora;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  get idComputadora() {
    return this._idComputadora;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get monitor() {
    return this._monitor;
  }
  set monitor(monitor) {
    this._monitor = monitor;
  }
  get teclado() {
    return this._teclado;
  }
  set teclado(teclado) {
    this._teclado = teclado;
  }

  toString() {
    return `Nombre=> ${this._nombre}\n Monitor=> ${this._monitor}\n Teclado=> ${this._teclado}\n Raton=> ${this._raton}`;
  }
}

let raton1 = new Raton("usb", "logitech");
let teclado1 = new Teclado("usb-c", "redragon");
let monitor1 = new Monitor("LG", "27 pulgadas");

let raton2 = new Raton("usb-c", "razer");
let teclado2 = new Teclado("usb", "zack");
let monitor2 = new Monitor("zowie", "24 pulgadas");

let computadora1 = new Computadora("MikelPc", monitor1, teclado1, raton1);
let computadora2 = new Computadora("GioPc", monitor2, teclado2, raton2);

class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += `\n ${computadora}`;
    }
    console.log(computadorasOrden);
  }
}

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();
