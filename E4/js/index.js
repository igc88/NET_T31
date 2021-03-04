var valores = [true, 5, false, "hola", "adios", 2];
var max = 0;

for (let valor of valores) {
    if (valor > max) {
        max = valor;
    }
}

console.log("El valor máximo " + max);

var v1 = valores[0] === valores[2];
var v2 = valores[0] !== valores[2];

console.log(v1);
console.log(v2);

console.log(valores[1] + "+" + valores[5] + " = " + (valores[1] + valores[5]));
console.log(valores[1] + "-" + valores[5] + " = " + (valores[1] - valores[5]));
console.log(valores[1] + "*" + valores[5] + " = " + (valores[1] * valores[5]));
console.log(valores[1] + "/" + valores[5] + " = " + (valores[1] / valores[5]));
console.log(valores[1] + "%" + valores[5] + " = " + (valores[1] % valores[5]));
