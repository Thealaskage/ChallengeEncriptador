const textoInicio = document.querySelector(".inicio");
const textoResultado = document.querySelector(".resultado");


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textoInicio.value)
    textoResultado.value = textoEncriptado
    textoInicio.value = "";
    textoResultado.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoInicio.value)
    textoResultado.value = textoEncriptado
    textoInicio.value = "";
    textoResultado.style.backgroundImage = "none";
}


function btnCopiar(){
    textoResultado.select(); 
    document.execCommand('copy'); 
    textoResultado.value = ""; 
    alert("Texto Copiado");
}



