import React, { Component } from 'react';

import SearchContainer from './SearchContainer';

import './styles.scss';

class BaseContainer extends Component {
	render() {
    return (
      <div className="base-container">
        <SearchContainer/>
      </div>
    );
  }
}

export default BaseContainer;
