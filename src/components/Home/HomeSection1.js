import React from "react";
import Wave from "react-wavify";
import './css/HomeSection1.css'

function HomeSection1() {
    return (
        <div className="section1">
            <h1>Career & Technical Education</h1>
            <h3>Coppell High School</h3>
            <div className="Wave">

                <Wave fill='rgb(255, 255, 255)'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3
                    }}
                />
            </div>
        </div>


    );
}

export default HomeSection1;