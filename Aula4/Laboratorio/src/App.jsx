import { useState } from 'react';

function gerarNumero() {
  return Math.floor(Math.random() * 100);
}

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumero());
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente Advinhar');
  const [status, setStatus] = useState('padrao');

  function verificarNumero(event) {
    event.preventDefault();

    const valor = Number(palpite);

    if (Number.isNaN(valor) || valor < 0 || valor > 99) {
      setMensagem('Digite um número de 0 a 99');
      setStatus('erro');
      return;
    }

    if (valor === numeroSecreto) {
      setMensagem('Parabéns, número correto');
      setStatus('sucesso');
      setNumeroSecreto(gerarNumero());
      setPalpite('');
      return;
    }

    if (valor > numeroSecreto) {
      setMensagem('Número grande');
    } else {
      setMensagem('Número pequeno');
    }

    setStatus('erro');
    setPalpite('');
  }

  return (
    <div className="container-jogo">
      <div className="painel">
        <div className="display">
          {palpite || '0'}
        </div>

        <form onSubmit={verificarNumero} className="formulario">
          <input
            type="number"
            min="0"
            max="99"
            value={palpite}
            onChange={(event) => setPalpite(event.target.value)}
            placeholder="Digite seu número"
          />
          <button type="submit">Clique Aqui</button>
        </form>
      </div>

      <div className={`resultado ${status}`}>
        {mensagem}
      </div>
    </div>
  );
}

export default App;
