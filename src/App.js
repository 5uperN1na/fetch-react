import React, { Component, Fragment } from 'react';
import Header from './components/layout/Header';
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

  //method + bind
  handlePeopleLoad = () => {
    this.setState({
      isFilmsLoaded: false,
      isPeopleLoaded: true
    });

  }

  //method + bind
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
        <Fragment>
        <Header />
        <Container>
       

          <Row className="justify-content-left my-2">
            <Col md={12}>
              <h1 className="text-center text-danger">Films</h1>
              <div>
            
                <Button onClick={this.handleFilmsLoad} variant="outline-secondary" size="sm">Get Films!</Button>
                {' '}  {' '}
                <Button onClick={this.handlePeopleLoad} variant="outline-secondary" size="sm">Get People!</Button>
              </div>
              <div>{<br />} </div>


              <div className="card">
                <ListGroup variant="flush">
                  {this.state.items.map(item => (
                    <ListGroup.Item key={item.id}>
                      <Card>
                        <Card.Body><b>Title:</b>  {item.title}</Card.Body>
                      </Card>
                      <div><br /></div>
                      <b>Description:</b> {item.description}
                    </ListGroup.Item>
                  ))};
              </ListGroup>
              </div>

            </Col>
          </Row>
        </Container>
        </Fragment>
      );

    } else if (!this.state.isFilmsLoaded && this.state.isPeopleLoaded) {
      return (
        <Fragment>
        <Header /> 
        <Container>
          <Row className="justify-content-left my-2">
            <Col md={12}>
            <h1 className="text-center text-danger">Films</h1>

            <div>
            
            <Button onClick={this.handleFilmsLoad} variant="outline-secondary" size="sm">Get Films!</Button>
            {' '}  {' '}
            <Button onClick={this.handlePeopleLoad} variant="outline-secondary" size="sm">Get People!</Button>
          </div>
          <div>{<br />} </div>
            


              <div className="card">
                <ListGroup variant="flush">
                  {this.state.people.map(peep => (
                    <ListGroup.Item key={peep.id}>
                    <Card>
                      <Card.Body><b>Name:</b>  {peep.name}</Card.Body>
                    </Card>
                    <div><br /></div>
                    <b>Eye Color:</b> {peep.eye_color}
                    </ListGroup.Item>
                  ))};
              </ListGroup>
              </div>

            </Col>
          </Row>
        </Container>
        </Fragment>
      );
    } else {
      return (
         <Fragment>
         <Header />
        <Container>
          <Row className="justify-content-left my-2">
            <Col md={12}>
              <h3 className="text-left text-danager">Click a button below to get data.</h3>
              <div>
                <Button onClick={this.handleFilmsLoad} variant="outline-secondary" size="sm">Get Films!</Button>
                {' '}  {' '}
                <Button onClick={this.handlePeopleLoad} variant="outline-secondary" size="sm">Get People!</Button>
                <div>{<br />} </div>
              </div>
            </Col>
          </Row>
        </Container>
        </Fragment>
      );
    }
  }


 // var { isLoaded, items } = this.state;
  //{/* if (!isLoaded) { */} */}
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