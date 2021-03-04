function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}

var n = prompt("Introduce un factorial entero");

alert("Factorial de " + n + " es: " + factorial(n));