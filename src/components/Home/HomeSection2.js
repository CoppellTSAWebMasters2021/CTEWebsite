import React from 'react'
import Cards from './components/Cards';
import './css/HomeSection2.css'

function HomeSection2() {
    return (
        <div id="section2-content">
            <div className = "section2">
            
            <Cards title= "BUSINESS & INDUSTRY"  />
            <Cards title= "PUBLIC SERVICES"  />
            <Cards title= "STEM"  />
            <Cards title= " ARTS & HUMANITIES"  />
            <Cards title= "MULTIDISCIPLINARY "  />
              

            </div>

        </div>
    );
}

export default HomeSection2;