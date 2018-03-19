import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:49490/Home/LlamarJson`)
      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key = {person.Nombre}>{person.Nombre}</li>)}
      </ul>
    )
  }
}
