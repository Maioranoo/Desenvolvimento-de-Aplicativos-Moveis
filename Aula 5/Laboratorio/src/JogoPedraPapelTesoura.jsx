import { useState } from 'react';

const OPCOES = ['Pedra', 'Papel', 'Tesoura'];
const TOTAL_RODADAS = 5;

const VENCE_DE = {
  Pedra: 'Tesoura',
  Papel: 'Pedra',
  Tesoura: 'Papel',
};

function sortearJogada() {
  return OPCOES[Math.floor(Math.random() * OPCOES.length)];
}

function JogoPedraPapelTesoura({ aoVoltar }) {
  const [placarUsuario, setPlacarUsuario] = useState(0);
  const [placarApp, setPlacarApp] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [rodada, setRodada] = useState(0);
  const [jogadaUsuario, setJogadaUsuario] = useState(null);
  const [jogadaApp, setJogadaApp] = useState(null);
  const [mensagem, setMensagem] = useState('Escolha Pedra, Papel ou Tesoura');
  const [status, setStatus] = useState('padrao');

  const jogoFinalizado = rodada >= TOTAL_RODADAS;

  function jogar(escolhaUsuario) {
    if (jogoFinalizado) {
      return;
    }

    const escolhaApp = sortearJogada();
    const novaRodada = rodada + 1;

    setJogadaUsuario(escolhaUsuario);
    setJogadaApp(escolhaApp);
    setRodada(novaRodada);

    let novoPlacarUsuario = placarUsuario;
    let novoPlacarApp = placarApp;
    let novosEmpates = empates;

    if (escolhaUsuario === escolhaApp) {
      novosEmpates += 1;
      setEmpates(novosEmpates);
      setMensagem('Empate!');
      setStatus('empate');
    } else if (VENCE_DE[escolhaUsuario] === escolhaApp) {
      novoPlacarUsuario += 1;
      setPlacarUsuario(novoPlacarUsuario);
      setMensagem('Você ganhou!');
      setStatus('sucesso');
    } else {
      novoPlacarApp += 1;
      setPlacarApp(novoPlacarApp);
      setMensagem('Você perdeu!');
      setStatus('erro');
    }

    if (novaRodada >= TOTAL_RODADAS) {
      if (novoPlacarUsuario > novoPlacarApp) {
        setMensagem((atual) => `${atual} Fim de jogo: você venceu o melhor de 5!`);
      } else if (novoPlacarApp > novoPlacarUsuario) {
        setMensagem((atual) => `${atual} Fim de jogo: o aplicativo venceu o melhor de 5!`);
      } else {
        setMensagem((atual) => `${atual} Fim de jogo: empate no melhor de 5!`);
      }
    }
  }

  function reiniciar() {
    setPlacarUsuario(0);
    setPlacarApp(0);
    setEmpates(0);
    setRodada(0);
    setJogadaUsuario(null);
    setJogadaApp(null);
    setMensagem('Escolha Pedra, Papel ou Tesoura');
    setStatus('padrao');
  }

  return (
    <div className="container-jogo">
      <div className="painel">
        <div className="display display-ppt">
          <span>Você: {jogadaUsuario ?? '-'}</span>
          <span>App: {jogadaApp ?? '-'}</span>
        </div>

        <div className="botoes-ppt">
          {OPCOES.map((opcao) => (
            <button
              key={opcao}
              type="button"
              onClick={() => jogar(opcao)}
              disabled={jogoFinalizado}
            >
              {opcao}
            </button>
          ))}
        </div>

        <div className="placar">
          <div>Placar (melhor de {TOTAL_RODADAS}): {placarUsuario} x {placarApp}</div>
          <div>Rodada: {Math.min(rodada, TOTAL_RODADAS)}/{TOTAL_RODADAS}</div>
          <div>Empates: {empates}</div>
        </div>
      </div>

      <div className={`resultado ${status}`}>{mensagem}</div>

      <div className="acoes">
        <button type="button" className="botao-secundario" onClick={reiniciar}>
          Reiniciar
        </button>
        <button type="button" className="botao-secundario" onClick={aoVoltar}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default JogoPedraPapelTesoura;
