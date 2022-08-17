import SearchBox from './component/searchbox/SearchBox';
import CardList from './component/cardlist/CardList';
import "./App.css";
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      robots: [],
      loading: false
    }

    console.log('constructor')
  }

  updateSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  componentDidMount() {
    this.setState({ loading: true});

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ robots: json, loading: false}))
    .catch((err) => console.log(err))

  }



  render() {

    const filteredRobots = this.state.robots.filter(item => (
      item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    ));
    return (
      <div className="">
        <h1 style={{ textAlign: 'center' }}>Robofriends</h1>
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        {this.state.loading && <h1 style={{ textAlign: 'center'}}>Loading...</h1>}
        {!filteredRobots.length && !this.state.loading && <h3 style={{ textAlign: 'center'}}>no result found</h3>}
        <CardList clients={filteredRobots}/>
      </div>
    );
  }
}

// hooks
// routing
// structure

export default App;