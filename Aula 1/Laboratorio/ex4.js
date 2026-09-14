const jogador1 = {
    nome: "Neymar",
    clube: "Al-Hilal"
};

const jogador2 = {
    nome: "Messi",
    clube: "Inter Miami"
};

function exibirJogador() {
    console.log(`${this.nome} joga no ${this.clube}.`);
}

const exibirJogador1 = exibirJogador.bind(jogador1);
const exibirJogador2 = exibirJogador.bind(jogador2);

exibirJogador1();
exibirJogador2();
