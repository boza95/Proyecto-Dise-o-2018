import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
    lastname: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const Usuario = {
      Nombre: this.state.name,
      Apellido: this.state.lastname
    };

    console.log("User Before ")
    console.log(Usuario);

    axios.post(`http://localhost:49490/Home/GetData`, { Usuario })
      .then(res => {
        console.log(res);
        console.log("User After ");
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          </label>
          <br/>
          <br/>
          <label>
            Apellido:
            <input type="text" name="lastname" onChange={this.handleChange} value={this.state.lastname} />
          </label>
          <br/>
          <br/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
