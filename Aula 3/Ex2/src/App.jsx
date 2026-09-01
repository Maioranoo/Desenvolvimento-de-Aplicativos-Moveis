import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }
  }
  
  incrementar(){
    this.setState({ contador: this.state.contador+2 })
  }
  
  decrementar(){
    this.setState({ contador: this.state.contador-2 })
  }
  zerar(){
    this.setState({ contador: this.state.contador=0})
  }
  
  render(){
    return(
      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={()=>this.incrementar()}>Incrementar</button>
        <button onClick={()=>this.decrementar()}>Decrementar</button>
        <button onClick={()=>this.zerar()}>zerar</button>
        
        </div>
    )
  }
}


export default App;