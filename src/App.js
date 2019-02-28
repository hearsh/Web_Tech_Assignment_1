import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import HomeCard from './components/HomeCard';
import People from './components/People';
import NextPage from './components/NextPage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: '',
      showSection: false,
      homeData: null,
      showPage: false,
      pageData: null,
      nextPage: null,
      prevPage: null,
      name: null,
    }
  }
  /* 
  This function gets the initial data from the star wars api and updates the state
  with the same.
  */
  getInitialData = () => {
    fetch('https://swapi.co/api/', {
      method: 'GET',
      mode: 'cors',
      crossdomain: true,
      headers: new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' }),
    }).then(response => {
      response.json().then((body) => {
        this.setState({
          message: 'What would you like to explore',
          showSection: true,
          homeData: body,
        })
      });
    }).catch((error) => console.log(error) );
  }

  /*
  This function is used to get the data based on users
  inputs, it updates the state with the new data
  */
  getSection = (link, name) => {
    fetch(link, {
      method: 'GET',
      mode: 'cors',
      crossdomain: true,
      headers: new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' }),
    }).then(response => {
      response.json().then((body) => {
        let data = body.results;
        this.setState({
          name,
          message: name,
          showPage: true,
          pageData: data,
          nextPage: body.next,
          prevPage: body.previous,
        })
      });
    }).catch((error) => console.log(error) );
  }

  changePage = (option, name) => {
    if(option === 'nextPage') {
      this.getSection(this.state.nextPage, this.state.name);
    } else {
      this.getSection(this.state.prevPage, this.state.name);
    }
    
  }

  componentDidMount() {
    this.getInitialData();
  };

  render() {
    return (
      <div className="mainContent">
        <HomePage
          message={this.state.message}
        />

        {this.state.showSection &&
          <HomeCard
            data={this.state.homeData}
            getSection={this.getSection}
          />
        }

        {this.state.showPage &&
          <People
            data={this.state.pageData}
            name={this.state.name}
          />
        }
        <NextPage 
          nextPage={this.state.nextPage}
          prevPage={this.state.prevPage}
          change={this.changePage}
        />
      </div>
    );
  }
}

export default App;
