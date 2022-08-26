
const inputText = document.querySelector(".inputText");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".botoncopiar");
btnCopy.style.visibility = "hidden";
const mensajePrevio = document.querySelector(".mensajeDeAbajoDeRespuesta");


//ENCRIPTAR


function btnEncriptar() {
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputText.value = " ";
    btnCopy.style.visibility = "visible";
    mensajePrevio.style.visibility = "hidden";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;
}

//DESENCRIPTAR

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputText.value = " ";
    btnCopy.style.visibility = "visible";
    mensajePrevio.style.visibility = "hidden";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }                
    }
    return stringDesencriptada;
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = alert("Texto Copiado");
    mensaje.value = " ";
    inputText.select();
}
