import React from 'react';
import './NavBar.css';

function Navbar() {
    return (
        <div>
            <ul id="nav">
                <div>
                    <h1 className="title"> CTE</h1>
                </div>

                <div className="list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Projects</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;