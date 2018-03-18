import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lista from './get.js'
import Interfaz from './post.js'

class App extends React.Component {
  constructor() {
    super();

    }

  render(){
    return (
      <div>
      <h1>Hola Mundo</h1>

      <Lista/>
      <br/>
      <Interfaz/>
      </div>
    );

  }
}

/*class Login extends React.Component {

  constructor(props){
      super(props);
      this.state = {value: ''}// Estado inicial del text box
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
       <label>
         Username:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <br/>
       <br/>
       <label>
         Password:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <br/>
       <br/>
       <input type="submit" value="Enviar" />
     </form>
   );
 }
}*/
// ========================================
/*class CajaDeTexto extends React.Component {
  render() {
    return (

      <input type = "text" value = {""}/>

    );
  }
}

class EtiquetaDeTexto extends React.Component {
  render() {
    return (

      <label className = "lbl"> {this.props.texto}</label>

    );
  }
}

*/
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
