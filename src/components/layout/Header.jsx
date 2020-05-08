import React from 'react'
import logo from './logo-sm.png';



function Header() {
    return (
        <header style={headerStyle}>
            <p align="left">
                <img src={logo} className="App-logo" alt="logo" />
            </p>



        </header>

    )
}


let headerStyle = {
    background: 'pink',
    color: 'black',
    padding: '5px',
    margin: '5px'

}

export default Header;