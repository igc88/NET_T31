var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = prompt("Introduce un DNI: ");

var dniValues = [dni.substr(0, 8), dni.substr(8, 1)];

var letra;

dniValues[0] > 99999999 ? alert("DNI no válido.") : letra = letras[dniValues[0] % 23];

if (letra === dniValues[1]) {
    alert("DNI validado. ");
}
else {
    alert("DNI no válido. ");
}


