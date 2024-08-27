
function mostrarResultado() {
    var inputText = document.querySelector("#input-texto").value;
    var botonCopiar = document.getElementById("btn-copy");
    var divImagen = document.getElementById("divImagen");
    var msg = document.getElementById("msg");

    if (inputText === "") {
        botonCopiar.style.visibility = "hidden";
        msg.style.visibility = "hidden";
        divImagen.style.display = "block";
    } else {
        botonCopiar.style.visibility = "visible";
        msg.style.visibility = "visible";
        divImagen.style.display = "none";
    }
}



function ocultarImagen() {
    document.getElementById("divImagen").style.display = "none";
}


function encriptar() {
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#input-texto").value;

    if (texto === "") {
        alert("Lo siento, pero no debe estar vacío.");
    } else if (texto.match(caracteres)) {
        alert("El texto no puede contener mayúsculas, acentos ni caracteres especiales.");
    } else {
        var textoCifrado = texto.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
        console.log("Texto cifrado:", textoCifrado); 
        document.querySelector("#msg").value = textoCifrado;
        mostrarResultado();
        ocultarImagen();
    }
}


function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    console.log("Texto descifrado:", textoCifrado); 
    document.querySelector("#msg").value = textoCifrado;
    mostrarResultado();
}


function copiarTexto() {
    var copiar = document.getElementById("msg");
    copiar.select();
    copiar.setSelectionRange(0, 99999); // Rango para móviles
    navigator.clipboard.writeText(copiar.value);
    alert("Se copió el texto: " + copiar.value);
}

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.onclick = desencriptar;

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.onclick = copiarTexto;

