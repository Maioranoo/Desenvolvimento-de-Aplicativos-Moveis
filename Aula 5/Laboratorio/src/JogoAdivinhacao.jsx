import { useState } from 'react';

function gerarNumero() {
  return Math.floor(Math.random() * 101);
}

function JogoAdivinhacao({ aoVoltar }) {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumero());
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente adivinhar o número de 0 a 100');
  const [status, setStatus] = useState('padrao');
  const [tentativas, setTentativas] = useState(0);

  function verificarNumero(event) {
    event.preventDefault();

    const valor = Number(palpite);

    if (palpite === '' || Number.isNaN(valor) || valor < 0 || valor > 100) {
      setMensagem('Digite um número de 0 a 100');
      setStatus('erro');
      return;
    }

    setTentativas((atual) => atual + 1);

    if (valor === numeroSecreto) {
      setMensagem('Parabéns, você acertou!');
      setStatus('sucesso');
      setNumeroSecreto(gerarNumero());
      setPalpite('');
      return;
    }

    if (valor > numeroSecreto) {
      setMensagem('O número digitado é maior');
    } else {
      setMensagem('O número digitado é menor');
    }

    setStatus('erro');
    setPalpite('');
  }

  function reiniciar() {
    setNumeroSecreto(gerarNumero());
    setPalpite('');
    setMensagem('Tente adivinhar o número de 0 a 100');
    setStatus('padrao');
    setTentativas(0);
  }

  return (
    <div className="container-jogo">
      <div className="painel">
        <div className="display">{palpite || '0'}</div>

        <form onSubmit={verificarNumero} className="formulario">
          <input
            type="number"
            min="0"
            max="100"
            value={palpite}
            onChange={(event) => setPalpite(event.target.value)}
            placeholder="Digite seu número"
          />
          <button type="submit">Verificar</button>
        </form>

        <div className="tentativas">Tentativas: {tentativas}</div>
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

export default JogoAdivinhacao;
