import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/Films')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {

      return (
        <div className="App">

          <h1>Films</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Title: {item.title} |
                Description: {item.description}  |
                Director: {item.director} }
              </li>
            ))};
          </ul>
        </div>

      );
    }
  }
}

export default App;