import React from 'react'
import logo from './logo_small_v2.png';



function Header() {
    return (
        <header style={headerStyle}>
            <p align="center">
                <img src={logo} className="App-logo" alt="logo" />
            </p>

        </header>




    )
}


let headerStyle = {
    background: '#DCDCDC',
    padding: '20px',
    margin: '15px',
    border: '15px solid'

}

export default Header;