import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // setto state iniziale
    this.state = {
      termineRicerca: ''
    };
  }
  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.termineRicerca}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  onInputChange(termineRicerca) {
    this.setState({
      termineRicerca
    });
    this.props.onSearchTermChange(termineRicerca);
  }
}


export default SearchBar;
