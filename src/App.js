import React, { Component } from 'react';
import MovieList from './MovieList.js';
import SearchInput from './SearchInput.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ui: {
        isLoading: true
      },
      data: {},
      dataFiltered: {}
    };

    this.filterData = this.filterData.bind(this);
  }
  filterData(value) {
    let dataObj = Object.assign({}, this.state.data);
    let dataFiltered = Object.values(dataObj).filter(movie => movie.title.match(new RegExp(value, 'i')));
    this.setState({ dataFiltered });
  }
  componentDidMount() {
    fetch('./movieListData.json').then(response => {
      if (response.status !== 200) {
        console.log('Sorry something went wrong. ', response.status);
        return;
      }
      response.json().then(data => {
        console.log(data);
        this.setState({
          ui: {
            isLoading: false
          },
          data,
          dataFiltered: data
        });
      });
    }).catch(error => {
      console.log('Error :', error);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="app__header">
          <SearchInput
            filterData={this.filterData}
          />
        </div>
        <div className="app__body">
          <MovieList
            isLoading={this.state.ui.isLoading}
            data={this.state.dataFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
