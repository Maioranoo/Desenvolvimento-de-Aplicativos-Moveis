import React from 'react';

class App extends React.Component {

  oi() {
    alert("Oi");
  }

  tchau() {
    alert("Tchau");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.oi()}>
          Oi
        </button>

        <button onClick={() => this.tchau()}>
          Tchau
        </button>
      </div>
    );
  }
}

export default App;
