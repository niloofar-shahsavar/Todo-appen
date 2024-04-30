import React from 'react';
import { Link } from 'react-router-dom';
function Header () {
    return (
        
        <div><div className='my-header'>
            
            <div className='Rubrik'>My Task Track</div>
        <nav className='myNav'>
        <Link className="mylink" to= "/">Home</Link>    |   
        <Link className="mylink" to= "/about">About</Link>    |   
        <Link className="mylink" to= "/contact">Contact us</Link>
      </nav>
    </div> </div>
        
    );
}

export default Header;