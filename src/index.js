import { Cliente } from "./cliente.js";
import { Impuesto }  from "./impuesto.js";

let impuesto = new Impuesto(10000000, 800000);
console.log(
  `EL Monto Bruto Anual es: ${impuesto.montoBrutoanual}, Las Deducciones son: ${impuesto._deducciones}`
);

let c1 = new Cliente("Cliente Uno", impuesto);
console.log(`El Impuesto de ${c1.nombre} es: ${c1.calcularImpuesto()}`);