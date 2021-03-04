function infoString(txt) {
    var minus = false;
    var mayus = false;

    for (let letra of txt) {
        if (letra === letra.toUpperCase()) {
            mayus = true;
        }
        else {
            minus = true;
        }
    }

    var txt = "";

    if (mayus) {
        txt += "Hay mayúsculas en el texto. \n";
    }
    if (minus) {
        txt += "Hay minúsculas en el texto. \n";
    }
    return txt;

}

var txt = prompt("Introduce un texto");

alert(infoString(txt));

