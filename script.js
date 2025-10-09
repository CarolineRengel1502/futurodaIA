const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- A inteligência artificial será cada vez mais usada na educação para o ensino?",
        alternativas: [
           "Sim", 
           "Não" 
        ]
    },
]
[
{
    enunciado: "2- A IA pode substituir totalmente  os humanos em todas as profissões futuras?",
    alternativas: [
        "Sim",
        "Não"
    ]
}
]
[
{
    enunciado: "3- É possível que a IA desenvolva consciência própria como um ser humano?",
    alternativas: [
        "Sim",
        "Não"
    ]
}
]
[
{
    enunciado: "4- A IA pode ajudar a reduzir desiguadades sociais por meio de decisões justas e imparciais?",
    alternativas: [
        "Sim",
        "Não"
    ]
}
]
[
{
    enunciado: "5- A inteligência artificial terá um papel importante no combate ás mudanças climáticas?",
    alternativas: [
        "Sim",
        "Não"
    ]
}
]
[
{
    enunciado: "6- A Inteligência Artificial será capaz de tomar decisões éticas sozinhos, sem intervenção humana?",
    alternativas: [
        "Sim",
        "Não"
    ]
}
]
[
{
    enunciado: "7- No futuro, os robôs com inteligência Artificial poderão cuidar de idosos e pessoas com deficiência?",
    alternativas: [
        "Sim",
        "Não"
    ]
},
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListenner("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Você já parou para pensar como vai ser a IA no futuro? Discutir o futuro da Inteligência Artificial é essencial para entender como ela pode contribuir para a sociedade e quais cuidados precisamos ter.";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();