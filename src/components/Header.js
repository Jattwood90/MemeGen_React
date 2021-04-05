import React from 'react';


const headerStyle = {
    width:'auto',
    backgroundColor:'#1E90FF',
}

// I've used a const styling and inline styling, purely to demonstrate
// that I know the different ways of editing CSS in React. 
// My preference is to import the style sheet from a .css file.


const Header = () => {
    return (
        <nav style={headerStyle} className="navbar navbar-light bg">
            <a style={{color: 'white', fontFamily:'impact', textShadow:'1.5px 0 black', fontSize: '22px', textAlign:'center'}} 
            className="navbar-brand" href="https://github.com/Jattwood90/MemeGen_React">MEME GENERATOR</a>
        </nav>
    )
}

export default Header;
