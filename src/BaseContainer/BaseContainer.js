import React, { Component } from 'react';

import PokemonListContainer from './PokemonListContainer';

class BaseContainer extends Component {
	render() {
    return (
      <div className="Base-body">
        <PokemonListContainer/>
      </div>
    );
  }
}

export default BaseContainer;
