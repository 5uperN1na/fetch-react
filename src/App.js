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
          <div class="jumbotron">
          <div class="card-header">
          <h1>Films</h1>
          </div>
          <div class="card">
              <ul class="list-group list-group-flush">
                {items.map(item => (
                  <li class="list-group-item" key={item.id}>
                   <b>Title:</b>  {item.title} 
                   <div><br /></div>
                <b>Description:</b> {item.description}  
                  </li>
                ))};   

          </ul>
          </div>

          </div >
        </div>

      );
    }
  }
}

export default App;