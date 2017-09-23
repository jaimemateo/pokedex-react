import React, { Component } from 'react';

class PaginationComponent extends Component {

  constructor(props){
		super(props);

		this.state = {
      currentPage: 1,
    };
		
		this.GoToPage = this.GoToPage.bind(this)
	}

	GoToPage(page) {
		this.props.callbackFromParent(page)
	}

	render() {
		return (
			<ul>Pagination Component
				<li>
					<button type="button" onClick={() => { this.GoToPage(1) }}> 1 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(2) }}> 2 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(3) }}> 3 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(4) }}> 4 </button>
				</li>
				<li>
					<button type="button" onClick={() => { this.GoToPage(5) }}> 5 </button>
				</li>
			</ul>
		);
  }
}

export default PaginationComponent;
