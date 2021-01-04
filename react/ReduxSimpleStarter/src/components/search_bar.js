import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    //this.state.term = event.target.value //BAD!!
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
  );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

/*
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    //this.state.term = event.target.value //BAD!!
    return (
      <div className="search-bar">
        <input onChange={event => this.setState({ term: event.target.value})} />
      </div>
  );
  }

}

export default SearchBar;
*/

/* some loop around that makes the search not work.
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    //this.state.term = event.target.value //BAD!!
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
  );
  }

}

export default SearchBar;
*/

/* print out what is typed in search_bar
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    //this.state.term = event.target.value //BAD!!
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
  );
  }

}

export default SearchBar;
*/

/*
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

}

export default SearchBar;
*/

/*
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }
//event handler for search_bar
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
*/

/*
import React, { Component} from 'react'; //const Component = React.Component;

class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

export default SearchBar;
*/

/*
import React from 'react';

const SearchBar = () => {
  return <input />; //React.createElement
};

export default SearchBar;
*/
