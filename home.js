function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

function createParagraph(value) {
    const element = document.createElement('p');
    element.innerHTML = value;
    return element;
}

let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
const palavras = [
    palavras001 = {
        nome: "PATO",
        categoria: "ANIMAL"
    },
    palavras002 = {
        nome: "RATO",
        categoria: "ANIMAL"
    },
    palavras003 = {
        nome: "GATO",
        categoria: "ANIMAL"
    },
    palavras004 = {
        nome: "SAPO",
        categoria: "ANIMAL"
    },
    palavras005 = {
        nome: "TATU",
        categoria: "ANIMAL"
    },
    palavras006 = {
        nome: "JACA",
        categoria: "FRUTA"
    },
    palavras007 = {
        nome: "KIWI",
        categoria: "FRUTA"
    },
    palavras008 = {
        nome: "COCO",
        categoria: "FRUTA"
    },
    palavras009 = {
        nome: "FIGO",
        categoria: "FRUTA"
    },
    palavras010 = {
        nome: "CAJU",
        categoria: "FRUTA"
    },
    palavras011 = {
        nome: "CUBA",
        categoria: "PAÍS"
    },
    palavras012 = {
        nome: "GANA",
        categoria: "PAÍS"
    },
    palavras013 = {
        nome: "TOGO",
        categoria: "PAÍS"
    },
    palavras014 = {
        nome: "PERU",
        categoria: "PAÍS"
    },
    palavras015 = {
        nome: "MALI",
        categoria: "PAÍS"
    },
    palavras016 = {
        nome: "SOPA",
        categoria: "ALIMENTO"
    },
    palavras017 = {
        nome: "SAGU",
        categoria: "ALIMENTO"
    },
    palavras018 = {
        nome: "BROA",
        categoria: "ALIMENTO"
    },
    palavras019 = {
        nome: "BOLO",
        categoria: "ALIMENTO"
    },
    palavras020 = {
        nome: "BIFE",
        categoria: "ALIMENTO"
    },
    palavras021 = {
        nome: "DADO",
        categoria: "OBJETO"
    },
    palavras022 = {
        nome: "CAPA",
        categoria: "OBJETO"
    },
    palavras023 = {
        nome: "CAMA",
        categoria: "OBJETO"
    },
    palavras024 = {
        nome: "BOLA",
        categoria: "OBJETO"
    },
    palavras025 = {
        nome: "CUIA",
        categoria: "OBJETO"
    },
    palavras026 = {
        nome: "AZUL",
        categoria: "COR"
    },
    palavras027 = {
        nome: "ROSA",
        categoria: "COR"
    },
    palavras028 = {
        nome: "BEJE",
        categoria: "COR"
    },
    palavras029 = {
        nome: "ROXO",
        categoria: "COR"
    },
    palavras030 = {
        nome: "GELO",
        categoria: "COR"
    },
    palavras031 = {
        nome: "POLO",
        categoria: "CARRO"
    },
    palavras032 = {
        nome: "CLIO",
        categoria: "CARRO"
    },
    palavras033 = {
        nome: "CRUZE",
        categoria: "CARRO"
    },
    palavras034 = {
        nome: "IDEA",
        categoria: "CARRO"
    },
    palavras035 = {
        nome: "ARGO",
        categoria: "CARRO"
    },
    palavras036 = {
        nome: "JUNO",
        categoria: "FILME"
    },
    palavras037 = {
        nome: "LUCY",
        categoria: "FILME"
    },
    palavras038 = {
        nome: "DAME",
        categoria: "FILME"
    },
    palavras039 = {
        nome: "ROMA",
        categoria: "FILME"
    },
    palavras040 = {
        nome: "HULK",
        categoria: "FILME"
    },
    palavras041 = {
        nome: "BETE",
        categoria: "PESSOA"
    },
    palavras042 = {
        nome: "RUTE",
        categoria: "PESSOA"
    },
    palavras043 = {
        nome: "SARA",
        categoria: "PESSOA"
    },
    palavras044 = {
        nome: "ROSE",
        categoria: "PESSOA"
    },
    palavras045 = {
        nome: "YAGO",
        categoria: "PESSOA"
    },
    palavras046 = {
        nome: "CHUI",
        categoria: "CIDADE"
    },
    palavras047 = {
        nome: "MATA",
        categoria: "CIDADE"
    },
    palavras048 = {
        nome: "BURI",
        categoria: "CIDADE"
    },
    palavras049 = {
        nome: "FAMA",
        categoria: "CIDADE"
    },
    palavras050 = {
        nome: "LINS",
        categoria: "CIDADE"
    },

];

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log( palavraSecretaCategoria)
}
criarPalavraSecreta();

function montarPalavranaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

const palavraTela = document.getElementById("palavra-secreta");
palavraTela.innerHTML = "";

for (i = 0; i < palavraSecretaSorteada.length; i++){
    if(listaDinamica[i] == undefined){
        listaDinamica[i] = "&nbsp;"
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>"
    }
    else{
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>"
    }
 }
}
montarPalavranaTela();

function verificaLetraEscolhida(letra){

    comparalistas(letra);
    montarPalavranaTela();
    //verificar se a palavra está completa
}


function comparalistas(letra){
const pos = palavraSecretaSorteada.indexOf(letra)
if(pos < 0){
    //aparecer imagem
}
else{
    for(i =0; i < palavraSecretaSorteada.length; i++)
    {
        if(palavraSecretaSorteada[i] == letra){
            listaDinamica[i] = letra;
        }
     }
 }
 let vitoria = true;
 for(i =0; i < palavraSecretaSorteada.length; i++){
    if(palavraSecretaSorteada[i] != listaDinamica[i]){
        vitoria= false;

    } 
 }
 
 if(vitoria == true)
 {
    //Colocar o certo
    //salvar no banco a pessoa que ganhou, a palavra e a data
    //gerar uma nova palavra
console.log('ok');
 }
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});

