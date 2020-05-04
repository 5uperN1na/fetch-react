import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // isLoaded: false,
      people: [],
      isFilmsLoaded: false,
      isPeopleLoaded: false,
   

    };

    // this.handleClick = this.handleClick.bind(this);

  }

  handlePeopleLoad = () => {
    this.setState({
      isFilmsLoaded: false,
      isPeopleLoaded: true
    });

  }


  handleFilmsLoad = () => {
    this.setState({
      isFilmsLoaded: true,
      isPeopleLoaded: false
    });

  }





  // handleClick(e) {
  //   this.setState({
  //     isLoaded: true
  //   });
  // }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/Films')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,

        })
      });


    fetch('https://ghibliapi.herokuapp.com/People')
      .then(res => res.json())
      .then(json => {
        this.setState({
          people: json,

        })
      });

  }






  render() {

    if (this.state.isFilmsLoaded && !this.state.isPeopleLoaded) {
      return (
        <Container>
          <Row className="justify-content-center my-2">
            <Col md={12}>
              <h1 className="text-center text-danger">Films</h1>
              <div>
                <button onClick={this.handleFilmsLoad}>Get Films!</button>
                <button onClick={this.handlePeopleLoad}>Get People</button>
              </div>

           
            </Col>
          </Row>
        </Container>
      );

    } else if (!this.state.isFilmsLoaded && this.state.isPeopleLoaded) {
      return (
        <Container>
          <Row className="justify-content-center my-2">
            <Col md={12}>
              <h1 className="text-center text-danger">People</h1>
             
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row className="justify-content-center my-2">
            <Col md={12}>
              <h1 className="text-center text-danager">Loading...</h1>
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
            </Col>
          </Row>
        </Container>
      );
    }
  }


  // var { isLoaded, items } = this.state;
  // if (!isLoaded) { */}
  //   return (

  //     <>
  //       <div>Welcome...</div>
  //       <button onClick={this.handleClick}>Get Films!</button>
  //       <button onClick={this.handleClick}>Get People!</button>
  //     </>

  //   );

  // }
  // else {

  //   return (

  //     <div className="App">
  //       <div className="jumbotron">
  //         <div>
  //           <br />


  //         </div>
  //         <Card.Header>
  //           <h1>films</h1>
  //         </Card.Header>
  //         <div className="card">
  //           <ListGroup variant="flush">
  //             {items.map(item => (
  //               <ListGroup.Item key={item.id}>
  //                 <b>Title:</b>  {item.title}
  //                 <div><br /></div>
  //                 <b>Description:</b> {item.description}
  //               </ListGroup.Item>
  //             ))};

  //         </ListGroup>
  //         </div>

  //       </div >
  //     </div>

  //   );
  // }


}

export default App;