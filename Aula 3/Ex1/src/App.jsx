import React from 'react';

function Card(props) {
  return (
    <div
      style={{
        backgroundColor:"Grey",
        color:"White",
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        margin: 10,
        width: 200,
        display: 'inline-block',
        fontFamily: 'sans-serif'
      }}
    >
      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Profissão: {props.profissao}</p>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Card nome="João" idade={19} profissao="Dev" />
        <Card nome="Dena" idade={56} profissao="Vendedor" />
        <Card nome="Taty" idade={40} profissao="Terapeuta" />
      </div>
    );
  }
}

export default App;
