function isPalindromo(txt) {
    var txtSinEspacios = txt.replace(/ /g, "");
    var txtPlano = txtSinEspacios.toLowerCase();

    let final = txtPlano.length - 1;
    for (let i = 0; i < (txtPlano.length / 2); i++) {
        if (txtPlano[i] !== txtPlano[final]) {
            return false;
        }

        final--;        
    }
    return true;
}

var txt = prompt("Introduce un texto");

isPalindromo(txt) ? alert("Es palíndromo") : alert("No es palíndromo");

