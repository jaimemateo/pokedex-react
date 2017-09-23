import React, { Component } from 'react';

class PaginationComponent extends Component {

  constructor(props){
		super(props);

		this.state = {
      currentPage: 0,
    };
		
		this.GoToPage = this.GoToPage.bind(this)
	}

	GoToPage(page) {
		this.props.callbackFromParent(page)
		this.setState({currentPage: page})
	}

	render() {
		return (
			<ul>Pagination Component
				<li>
					<button type="button" onClick={() => { this.GoToPage(0) }} disabled = {this.state.currentPage === 0} > 1 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(1) }} disabled = {this.state.currentPage === 1} > 2 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(2) }} disabled = {this.state.currentPage === 2} > 3 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(3) }} disabled = {this.state.currentPage === 3} > 4 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(4) }} disabled = {this.state.currentPage === 4} > 5 </button>
				</li>
			</ul>
		);
  }
}

export default PaginationComponent;
