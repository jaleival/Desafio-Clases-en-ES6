"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var impuesto = new _impuesto.Impuesto(10000000, 800000);
console.log("EL Monto Bruto Anual es: ".concat(impuesto.montoBrutoanual, ", Las Deducciones son: ").concat(impuesto._deducciones));
var c1 = new _cliente.Cliente("Cliente Uno", impuesto);
console.log("El Impuesto de ".concat(c1.nombre, " es: ").concat(c1.calcularImpuesto()));