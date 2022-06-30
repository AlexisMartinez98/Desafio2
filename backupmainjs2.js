let productos = [{
    producto1: "mouse",
    precio1: 4450,
}, 
{
    producto2: "teclado",
    precio2: 12890,
}, 
{
    producto3: "auriculares",
    precio3: 20900,
}, 
{
    producto4: "monitor",
    precio4: 37000,
}, 
{
    producto5: "impresora",
    precio5: 35500,
}
];

const descuento = 0.05;
const cuota3 = 0.05;
const cuota6 = 0.1;
const cuota12 = 0.15;

let itemProductos;

do {
    itemProductos = prompt("Ingrese el articulo a comprar(MOUSE ,TECLADO, AURICULARES, MONITOR O IMPRESORA) ").toUpperCase();
    if ((itemProductos == "MOUSE") || (itemProductos == "TECLADO") || (itemProductos == "AURICULARES") || (itemProductos == "MONITOR") || (itemProductos == "IMPRESORA")) {
        break;
    }
} while ((itemProductos != "MOUSE") || (itemProductos != "TECLADO") || (itemProductos != "AURICULARES") || (itemProductos != "MONITOR") || (itemProductos != "IMPRESORA"));

document.write("<h1>Producto: " + itemProductos + "</h1>");

let cantidad;
let subTotal;

if (itemProductos == "MOUSE") {
    do {
        cantidad = prompt("Ingrese la cantidad de " + itemProductos + " a comprar");
        if (cantidad > 0) {
            break;
        }
    } while (cantidad <= 0);

    subTotal = productos[0].precio1 * cantidad;
    console.log(productos.precio1)
    document.write("El subtotal de la compra es: " + subTotal);
} else if (itemProductos == "TECLADO") {
    do {
        cantidad = prompt("Ingrese la cantidad de " + itemProductos + " a comprar");
        if (cantidad > 0) {
            break;
        }
    } while (cantidad <= 0);

    subTotal = productos[0].precio2 * cantidad;
    document.write("El subtotal de la compra es: " + subTotal);
} else if (itemProductos == "AURICULARES") {
    do {
        cantidad = prompt("Ingrese la cantidad de " + itemProductos + " a comprar");
        if (cantidad > 0) {
            break;
        }
    } while (cantidad <= 0);

    subTotal = productos[0].precio3 * cantidad;
    document.write("El subtotal de la compra es: " + subTotal);
} else if (itemProductos == "MONITOR") {
    do {
        cantidad = prompt("Ingrese la cantidad de " + itemProductos + " a comprar");
        if (cantidad > 0) {
            break;
        }
    } while (cantidad <= 0);

    subTotal = productos[0].precio4 * cantidad;
    document.write("El subtotal de la compra es: " + subTotal);
} else if (itemProductos == "IMPRESORA") {
    do {
        cantidad = prompt("Ingrese la cantidad de " + itemProductos + " a comprar");
        if (cantidad > 0) {
            break;
        }
    } while (cantidad <= 0);

    subTotal = productos[0].precio5 * cantidad;
    document.write("El subtotal de la compra es: " + subTotal);
}

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