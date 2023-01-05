// pega o texto
var mensagem = document.querySelector("[name=decodificador]");

// transição de tela
function mostraTexto() {
    var tela2 = document.getElementById('tela2')
    var tela1 = document.getElementById('tela1')
    if (document.querySelector("[name=decodificador]").value == false) {
        if (tela2.style.display == 'none') {
            tela2.style.display = 'block';
            tela1.style.display = 'none';
        } else {
            tela2.style.display = 'none';
        }
    } else {
        tela1.style.display = 'none';
        tela2.style.display = 'block'
    }
}
mostraTexto();


// criptografa 
function cripto() {
    // transforma em array
    const string = mensagem.value
    const newArray = string.split("");
    // substitui as letras
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] == 'e') {
            newArray[i] = 'enter'
        }
        if (newArray[i] == 'i') {
            newArray[i] = 'imes'
        }
        if (newArray[i] == 'o') {
            newArray[i] = 'ober'
        }
        if (newArray[i] == 'a') {
            newArray[i] = 'ai'
        }
        if (newArray[i] == 'u') {
            newArray[i] = 'ufat'
        }
        else {
            console.log('live')
        }
        document.getElementById("textArea2").innerHTML = `${newArray.join('')}`
    }
}
// descriptografa
function decripto() {
    const string = mensagem.value
    var resultado = string.replace(/ai/g, "a").replace(/ufat/g, "u").replace(/ober/g, "o").replace(/imes/g, "i").replace(/enter/g, "e")
    document.getElementById("textArea2").innerHTML = resultado;
}


// copia o texto criptografado
const textInput = document.getElementById('textArea2');
const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
    textInput.select();
    document.execCommand('copy')
});

// botao de criptografar
function uneTudo() {
    mostraTexto();
    cripto();
}
function uneTudo2() {
    mostraTexto();
    decripto();
}


var Criptografar = document.querySelector("[value=Criptografar]");
Criptografar.onclick = uneTudo;

var Descriptografar = document.querySelector("[value=Descriptografar]");
Descriptografar.onclick = uneTudo2;