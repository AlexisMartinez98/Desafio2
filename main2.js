const descuento = 0.05;
const cuota3 = 0.05;
const cuota6 = 0.1;
const cuota12 = 0.15;

const precio = localStorage.getItem('precio')
console.log(precio)

let metodoPago;
let cuotas;

do {
    metodoPago = prompt("Ingrese el metodo de pago (EFECTIVO O TARJETA)").toUpperCase();
    if ((metodoPago == "TARJETA") || (metodoPago == "EFECTIVO")) {
        if (metodoPago == "EFECTIVO") {
            break;
        } else if (metodoPago == "TARJETA"); {
            do {
                cuotas = prompt("Ingrese la cantidad de cuotas (3, 6 o 12)");
                if ((cuotas == 3) || (cuotas == 6) || (cuotas == 12)) {
                    break;
                }
            } while ((cuotas != 3) || (cuotas != 6) || (cuotas != 12));
        }
        break;
    }
} while ((metodoPago != "TARJETA") || (metodoPago != "EFECTIVO"));

let interes;
let total;
let totalCuotas;


if (metodoPago == "EFECTIVO") {
    interes = subTotal * descuento;
    total = subTotal - interes;
    document.write("<br>Descuento por pago en efectivo: " + interes);
    document.write("<br>" + "total efectivo con descuento: " + total);
}

if (cuotas == 3) {
    interes = subTotal * cuota3;
    total = (subTotal + interes);
    totalCuotas = total / 3;
    document.write("<br>" + "Interes de 3 cuotas: " + interes);
    document.write("<br>" + "Total con Interes :" + total);
    document.write("<br>" + "El total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
} else if (cuotas == 6) {
    interes = subTotal * cuota6;
    total = (subTotal + interes);
    totalCuotas = total / 6;
    document.write("Interes de 6 cuotas: " + interes);
    document.write("<br>" + "Total con Interes :" + total);
    document.write("<br>" + "El total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
} else if (cuotas == 12) {
    interes = subTotal * cuota12;
    total = (subTotal + interes);
    totalCuotas = total / 12;
    document.write("<br>" + "Interes de 12 cuotas: " + interes);
    document.write("<br>" + "Total con Interes :" + total);
    document.write("<br>" + "El total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
}