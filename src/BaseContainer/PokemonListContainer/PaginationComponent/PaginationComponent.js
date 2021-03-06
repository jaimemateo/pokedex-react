import React, { Component } from 'react';

import './styles.scss';

class PaginationComponent extends Component {

  constructor(props){
		super(props);

		this.state = {
      currentPage: 0,
    };
		
		this.GoToPage = this.GoToPage.bind(this)
	}

	GoToPage(page) {
		this.props.changePage(page)
		this.setState({currentPage: page})
	}

	render() {
		return (
			<div className="pagination-container" >
				<button type="button" onClick={() => { this.GoToPage(0) }} disabled = {this.state.currentPage === 0} > 1 </button>
				<button type="button" onClick={() => { this.GoToPage(1) }} disabled = {this.state.currentPage === 1} > 2 </button>
				<button type="button" onClick={() => { this.GoToPage(2) }} disabled = {this.state.currentPage === 2} > 3 </button>
				<button type="button" onClick={() => { this.GoToPage(3) }} disabled = {this.state.currentPage === 3} > 4 </button>
				<button type="button" onClick={() => { this.GoToPage(4) }} disabled = {this.state.currentPage === 4} > 5 </button>
			</div>
		);
  }
}

export default PaginationComponent;
