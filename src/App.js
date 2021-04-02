import React, {Component} from 'react'
import biscoito from './assets/cronometro.png';
import './style.css' 

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.zera = this.zera.bind(this);
  }

  vai(){
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Vai';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1
        this.setState(state)
      },100)
      state.botao = 'PAUSAR'
    }

    this.setState(state)
  }

  zera() {
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI'; 
    this.setState(state);

  }


  

  render(){
    return(
      <div className="container">
        <img className="img" src={biscoito} className="img" className="img"/>  
        <a className="timer">{this.state.numero.toFixed(1)}</a>

        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>  
          <a className="botao" onClick={this.zera}>ZERAR</a>
        </div>

      </div>
    );
  }
}

export default App;