const products = {}
let total = 0;
let cantidad = 0;
let subTotal= 0;
let metodoPago;
let cuotas;
let interes;
let totalCuotas;

const descuento = 0.05;
const cuota3 = 0.05;
const cuota6 = 0.1;
const cuota12 = 0.15;

function add(product, price){
        if (product , price) {
            total += price;
            cantidad = prompt("¿Cuántos " +product+  " desea agregar?");
            subTotal = cantidad * price;
            alert("el monto a pagar es de $" + subTotal);
        }
do {
    metodoPago = prompt("Ingrese el metodo de pago (EFECTIVO O TARJETA)").toUpperCase();
    if ((metodoPago == "TARJETA" )||(metodoPago == "EFECTIVO")) {
        if (metodoPago == "EFECTIVO") {
        break;
        } else if (metodoPago == "TARJETA");{
            do {
                cuotas= prompt("Ingrese la cantidad de cuotas (3, 6 o 12)");
                if ((cuotas == 3) || (cuotas == 6) || (cuotas == 12)) {
                    break;
                }
            } while ((cuotas != 3) || (cuotas != 6) || (cuotas != 12));
        }
        break;
    }
} while ((metodoPago != "TARJETA") || (metodoPago != "EFECTIVO"));

if (metodoPago == "EFECTIVO") {
    interes = subTotal * descuento;
    total = subTotal - interes;
    alert("Descuento por pago en efectivo: " + interes+
    "\ntotal efectivo con descuento: " + total);
}

if (cuotas==3) {
    interes = subTotal * cuota3 ;
    total = (subTotal + interes);
    totalCuotas = total / 3;
    alert("Interes de 3 cuotas: " + interes+
    "\nTotal con Interes :" + total+
    "\nEl total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
}else if (cuotas==6) {
    interes = subTotal * cuota6 ;
    total = (subTotal + interes);
    totalCuotas = total / 6;
    alert("Interes de 3 cuotas: " + interes+
    "\nTotal con Interes :" + total+
    "\nEl total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
}else if (cuotas==12) {
    interes = subTotal * cuota12 ;
    total = (subTotal + interes);
    totalCuotas = total / 12;
    alert("Interes de 3 cuotas: " + interes+
    "\nTotal con Interes :" + total+
    "\nEl total a pagar es: " + cuotas + " cuotas de " + totalCuotas);
}
}