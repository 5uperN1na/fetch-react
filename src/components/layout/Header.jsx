import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from './logo_small_v2.png';


function Header(props) {
    return (
        <>
            <header style={headerStyle}>
                <p align="center">
                    <img src={logo} className="App-logo" alt="logo" />
                </p>

                <h3 className="text-center">Reacting to APIs!</h3>


                <Button onClick={props.pizza} variant="outline-secondary" size="sm">Get Films!</Button>
                {' '}  {' '}
                <Button onClick={props.apple} variant="outline-secondary" size="sm">Get People!</Button>
              
            </header>
            <div>





            </div>


        </>







    )
}


let headerStyle = {
    background: '#F5F5F5',
    padding: '5px',
    margin: '15px',
    border: '10px solid'

}

export default Header;