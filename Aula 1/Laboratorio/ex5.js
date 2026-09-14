const processarMensagem = (mensagem, callback) => callback(mensagem);

const juntarStrings = (mensagem) => `*** ${mensagem} ***`;

console.log(processarMensagem("Atenção: Sistema instável!", juntarStrings));

const contarCaracteres = (mensagem) => `Resumo: A mensagem contém ${mensagem.length} caracteres.`;

console.log(processarMensagem("Estamos testando o sistema de mensagens!!!", contarCaracteres));

const verificarCaixa = (mensagem) => {
    if (mensagem === mensagem.toLowerCase() && mensagem !== mensagem.toUpperCase()) {
        return "Mensagem em caixa baixa: tudo em minúsculas";
    } else if (mensagem === mensagem.toUpperCase() && mensagem !== mensagem.toLowerCase()) {
        return "Mensagem em caixa alta: tudo em maiúsculas";
    } else {
        return "Mensagem em caixa mista: minúsculas e maiúsculas";
    }
};

console.log(processarMensagem("tudo em minusculas mesmo", verificarCaixa));
