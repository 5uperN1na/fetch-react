import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    };

    this.handleClick = this.handleClick.bind(this);
     

  }

  handleClick(e) {
    this.setState({
      loaded: true
    });
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/Films')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: false,
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
          <div className="jumbotron">
            <div>
              <br />
              <button onClick={this.handleClick}>Click Me!</button>

            </div>
            <Card.Header>
              <h1>films</h1>
            </Card.Header>
            <div className="card">
              <ListGroup variant="flush">
                {items.map(item => (
                  <ListGroup.Item key={item.id}>
                    <b>Title:</b>  {item.title}
                    <div><br /></div>
                    <b>Description:</b> {item.description}
                  </ListGroup.Item>
                ))};

          </ListGroup>
            </div>

          </div >
        </div>

      );
    }
  }
}

export default App;