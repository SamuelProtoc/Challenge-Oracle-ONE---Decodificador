/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


// capturando os botões e entradas:
var entrada = document.getElementById("input-texto");
var botaoCriptografar = document.getElementById("btn-cripto");
var botaoDescriptografar = document.getElementById("btn-descripto");
var saida = document.getElementById("msg");
var copiar = document.getElementById("btn-copy");
    
// criptografar
function funcaoCriptografar (texto) {

    var resposta = "";

    for(var i = 0; i < texto.length; i++) {
        if( texto[i] == "e") {

            resposta = resposta + "enter";

        } else if(texto[i] == "i") {

            resposta = resposta + "imes";

        } else if(texto[i] == "a") {

            resposta = resposta + "ai";

        } else if(texto[i] == "o") {

            resposta = resposta + "ober";

        } else if(texto[i] == "u") {

            resposta = resposta + "ufat";

        } else if(texto[i] == " ") {

            resposta = resposta + " ";
        
        } else 

        resposta = resposta + texto[i];
        
    }    
    return resposta;
}

function btn_onclick (e) {
    e.preventDefault();
    var criptografador = funcaoCriptografar(entrada.value);
    saida.value = criptografador;
    entrada.value = "";
    entrada.focus();
}
    botaoCriptografar.onclick = btn_onclick;

// descriptografar
function funcaoDescriptografar (texto) {

    var resposta = "";

    resposta = texto.replace(/enter/gi, "e");
    resposta = resposta.replace(/ai/gi, "a");
    resposta = resposta.replace(/imes/gi, "i");
    resposta = resposta.replace(/ober/gi, "o");
    resposta = resposta.replace(/ufat/gi, "u");
    resposta = resposta.replace(/ /gi, " ");
    
    return resposta;
}

function btndes_onclick (e) {
    e.preventDefault();
    var descriptografar = funcaoDescriptografar(entrada.value);
    saida.value = descriptografar;
    entrada.value = "";
    entrada.focus();    
}
    botaoDescriptografar.onclick = btndes_onclick;

// copiar
function copy() {
    var copiarTexto = saida;
    copiarTexto.select();
    document.execCommand("copy");
    saida.value = "";
    alert("Texto copiado !")
    entrada.focus();
}
    copiar.onclick = copy;
