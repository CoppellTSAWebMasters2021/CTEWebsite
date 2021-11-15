import React from 'react';
import { Component } from 'react';
import './css/NavBar.css';

class Navbar extends Component {
    

    render() {
        return (
            <div>
                   
                <ul id="nav">
                    
                    <div>
                        <h1 className="title"> CTE</h1>

                    </div>
                    


                    <div className="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Projects</a></li>
                    </div>


                </ul>
            </div>
        )
    }
}

export default Navbar;