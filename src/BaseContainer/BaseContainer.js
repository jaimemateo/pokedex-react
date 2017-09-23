import React, { Component } from 'react';

import SearchContainer from './SearchContainer';

class BaseContainer extends Component {
	render() {
    return (
      <div className="Base-body">
        <SearchContainer/>
      </div>
    );
  }
}

export default BaseContainer;
