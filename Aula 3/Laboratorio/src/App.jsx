import React from 'react';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visor: '0',
      numeroAtual: '0',
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: false,
      calculado: false,
    };
  }

  clicarNumero(numero) {
    const { visor, numeroAtual, aguardandoNovoValor, calculado } = this.state;

    if (calculado) {
      this.setState({
        visor: String(numero),
        numeroAtual: String(numero),
        valorAnterior: null,
        operador: null,
        aguardandoNovoValor: false,
        calculado: false,
      });
      return;
    }

    if (aguardandoNovoValor) {
      this.setState({
        visor: visor + numero,
        numeroAtual: String(numero),
        aguardandoNovoValor: false,
      });
      return;
    }

    this.setState({
      visor: visor === '0' ? String(numero) : visor + numero,
      numeroAtual: numeroAtual === '0' ? String(numero) : numeroAtual + numero,
    });
  }

  clicarOperador(operador) {
    const { visor, numeroAtual, valorAnterior, operador: operadorAtual, aguardandoNovoValor, calculado } = this.state;
    const valorAtual = parseFloat(numeroAtual);

    if (calculado) {
      this.setState({
        valorAnterior: valorAtual,
        operador,
        visor: `${numeroAtual} ${operador} `,
        aguardandoNovoValor: true,
        calculado: false,
      });
      return;
    }

    if (aguardandoNovoValor && operadorAtual !== null) {
      this.setState({
        operador,
        visor: `${visor.slice(0, -3)} ${operador} `,
      });
      return;
    }

    if (valorAnterior === null) {
      this.setState({
        valorAnterior: valorAtual,
        operador,
        visor: `${visor} ${operador} `,
        aguardandoNovoValor: true,
      });
      return;
    }

    const resultado = this.calcular(valorAnterior, valorAtual, operadorAtual);

    this.setState({
      valorAnterior: resultado,
      operador,
      visor: `${visor} ${operador} `,
      aguardandoNovoValor: true,
    });
  }

  calcular(a, b, operador) {
    switch (operador) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b === 0 ? 'Erro' : a / b;
      default:
        return b;
    }
  }

  clicarIgual() {
    const { numeroAtual, valorAnterior, operador } = this.state;

    if (operador === null || valorAnterior === null) {
      return;
    }

    const valorAtual = parseFloat(numeroAtual);
    const resultado = this.calcular(valorAnterior, valorAtual, operador);

    this.setState({
      visor: String(resultado),
      numeroAtual: String(resultado),
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: false,
      calculado: true,
    });
  }

  clicarLimpar() {
    this.setState({
      visor: '0',
      numeroAtual: '0',
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: false,
      calculado: false,
    });
  }

  render() {
    const { visor } = this.state;

    return (
      <div className="calculadora">
        <div className="visor">{visor}</div>

        <div className="botoes">
          <button onClick={() => this.clicarLimpar()}>C</button>
          <button onClick={() => this.clicarOperador('/')}>/</button>
          <button onClick={() => this.clicarOperador('*')}>*</button>
          <button onClick={() => this.clicarOperador('-')}>-</button>

          <button onClick={() => this.clicarNumero(7)}>7</button>
          <button onClick={() => this.clicarNumero(8)}>8</button>
          <button onClick={() => this.clicarNumero(9)}>9</button>
          <button onClick={() => this.clicarOperador('+')} className="botao-alto">+</button>

          <button onClick={() => this.clicarNumero(4)}>4</button>
          <button onClick={() => this.clicarNumero(5)}>5</button>
          <button onClick={() => this.clicarNumero(6)}>6</button>

          <button onClick={() => this.clicarNumero(1)}>1</button>
          <button onClick={() => this.clicarNumero(2)}>2</button>
          <button onClick={() => this.clicarNumero(3)}>3</button>
          <button onClick={() => this.clicarIgual()} className="botao-alto">=</button>

          <button onClick={() => this.clicarNumero(0)} className="botao-largo">0</button>
        </div>
      </div>
    );
  }
}

export default App;
