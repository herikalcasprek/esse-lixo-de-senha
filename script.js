const campoSenha = document.querySelector("#campo-senha");
const numeroCaracteres = document.querySelector("#numero-caracteres");

const botaoMenos = document.querySelector("#menos");
const botaoMais = document.querySelector("#mais");

const maiusculas = document.querySelector("#maiusculas");
const minusculas = document.querySelector("#minusculas");
const numeros = document.querySelector("#numeros");
const simbolos = document.querySelector("#simbolos");

const textoForca = document.querySelector("#texto-forca");

let tamanhoSenha = 12;

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numerosDisponiveis = "0123456789";
const simbolosDisponiveis = "!@#$%&*+-=?";

function gerarSenha() {

    let caracteresDisponiveis = "";

    if (maiusculas.checked) {
        caracteresDisponiveis += letrasMaiusculas;
    }

    if (minusculas.checked) {
        caracteresDisponiveis += letrasMinusculas;
    }

    if (numeros.checked) {
        caracteresDisponiveis += numerosDisponiveis;
    }

    if (simbolos.checked) {
        caracteresDisponiveis += simbolosDisponiveis;
    }

    if (caracteresDisponiveis.length === 0) {
        campoSenha.value = "";
        textoForca.textContent = "Selecione pelo menos uma característica";
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(
            Math.random() * caracteresDisponiveis.length
        );

        senha += caracteresDisponiveis[indiceAleatorio];
    }

    campoSenha.value = senha;

    atualizarForca();
}

function atualizarForca() {

    if (tamanhoSenha < 8) {
        textoForca.textContent = "Fraca";
        textoForca.style.color = "red";
    } 
    else if (tamanhoSenha < 12) {
        textoForca.textContent = "Média";
        textoForca.style.color = "orange";
    } 
    else {
        textoForca.textContent = "Forte";
        textoForca.style.color = "green";
    }
}

botaoMais.addEventListener("click", function () {

    if (tamanhoSenha < 30) {
        tamanhoSenha++;
        numeroCaracteres.textContent = tamanhoSenha;
        gerarSenha();
    }

});

botaoMenos.addEventListener("click", function () {

    if (tamanhoSenha > 4) {
        tamanhoSenha--;
        numeroCaracteres.textContent = tamanhoSenha;
        gerarSenha();
    }

});

maiusculas.addEventListener("change", gerarSenha);
minusculas.addEventListener("change", gerarSenha);
numeros.addEventListener("change", gerarSenha);
simbolos.addEventListener("change", gerarSenha);

gerarSenha();
