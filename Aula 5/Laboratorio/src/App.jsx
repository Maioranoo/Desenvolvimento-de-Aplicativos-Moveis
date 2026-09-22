import { useState } from 'react';
import JogoAdivinhacao from './JogoAdivinhacao';
import JogoPedraPapelTesoura from './JogoPedraPapelTesoura';

function App() {
  const [tela, setTela] = useState('menu');

  if (tela === 'adivinhacao') {
    return <JogoAdivinhacao aoVoltar={() => setTela('menu')} />;
  }

  if (tela === 'ppt') {
    return <JogoPedraPapelTesoura aoVoltar={() => setTela('menu')} />;
  }

  return (
    <div className="container-jogo">
      <div className="painel painel-menu">
        <h1 className="titulo-menu">Laboratório 5</h1>
        <button type="button" onClick={() => setTela('adivinhacao')}>
          Exercício 1: Jogo da Adivinhação
        </button>
        <button type="button" onClick={() => setTela('ppt')}>
          Exercício 2: Pedra, Papel ou Tesoura
        </button>
      </div>
    </div>
  );
}

export default App;
