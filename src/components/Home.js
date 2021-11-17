import React from "react";
//import Wave from "react-wavify";
import './css/Home.css'
import Typewriter from 'typewriter-effect';
import Card from './Card'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="container">
            <div className="section1">
                <div className="title-text">
                    <div className="title-text-1">
                    </div>
                    <h1 >Career & Technical Education</h1>
                    <h3>
                        <div className="tw-1">
                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter.typeString('Coppell High School').start();



                                }}

                            />
                        </div>
                    </h3>
                </div>
                {/* <div className="Wave">
                    
                    <Wave fill='rgb(255, 255, 255)'
                        paused={false}
                        options={{
                            height: 1,
                            amplitude: 20,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                </div> */}



            </div>

            <div className="section2">
                <div className="section2-title-text">
                    <h1>What is Career & Technical Education?</h1>
                    <p>CISD Career & Technical Education (CTE) program allows students to develop both college preparation and real-world workforce skills development through this customized education program.  CTE content is aligned with challenging academic standards and relevant technical knowledge and skills needed to prepare for further education and careers in current or emerging professions.</p>
                    <h2>Programs of Study</h2>
                    <p>Programs of study are course sequences that prepare students with the knowledge and skills necessary for success in their chosen career. These sequences embed relevant, real world experiences and culminate in a postsecondary credential.</p>

                </div>

                <div className="section2-cards">
                    {/* <Carousel infiniteLoop={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} className="Carousel" > */}
                    <div className="row1">
                        <Card
                            title="Architecture and Construction"
                            body=""
                            btn="architecture"

                        />
                        <Card
                            title="Arts, Audio Visual Technology, and Communications"
                            body=""
                            btn="arts"

                        />
                        <Card
                            title="Business, Marketing, and Finance"
                            body=""
                            btn="business"

                        />
                    </div>

                    <div className="row2">
                        <Card
                            title="Education and Training"
                            body=""
                            btn="education"

                        />
                        <Card
                            title="Health Science"
                            body=""
                            btn="health"

                        />
                        <Card
                            title="Science, Technology, Engineering, and Mathematics (STEM)"
                            body=""
                            btn="stem"

                        />
                    </div>
                    {/* </Carousel> */}
                </div>

            </div>


        </div>



    );
}

export default Home;