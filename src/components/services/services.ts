import React from 'react';
import { servicesStore } from '../stores/servicesStore';

class Services extends React.Component {
  render(){
    return (
      <div>
        <h2>Pokemons</h2>
        <ul>{this.renderPokemons}</ul>
      </div>
    )
  }

}

export default Services;