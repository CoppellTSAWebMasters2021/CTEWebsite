import React from "react";
//import Wave from "react-wavify";
import './css/Home.css'
import Typewriter from 'typewriter-effect';
import Card from './Card'


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
                <Card
                    title="Architecture and Construction"
                    body="The Architecture and Construction Career Cluster® focuses on designing, planning, managing, building, and maintaining the built environment. Principles of Architecture provides an overview to the various fields of architecture, interior design, and construction management."
                    btn="Learn More"

                />
                <Card
                    title="Arts, Audio Visual Technology, and Communications"
                    body="The Arts, A/V Technology and Communications (AAVTC) Career Cluster® focuses on careers in designing, producing, exhibiting, performing, writing, and publishing multimedia content including visual and performing arts and design, journalism, and entertainment services. Careers in the AAVTC career cluster require a creative aptitude, a strong background in computer and technology applications, a strong academic foundation, and a proficiency in oral and written communication."
                    btn="Learn More"

                />
                <Card
                    title="Business, Marketing, and Finance"
                    body="The Business, Marketing, and Finance Career Cluster® focuses on careers in planning, organizing, directing and evaluating business functions as essential to efficient and productive business operations."
                    btn="Learn More"

                />
                <Card
                    title="Education and Training"
                    body="The Education and Training Career Cluster® focuses on planning, managing, and providing education and training services and related learning support services. All parts of courses are designed to introduce learners to the various careers available within the Education and Training career cluster."
                    btn="Learn More"

                />
                <Card
                    title="Health Science"
                    body="The Health Science Career Cluster® focuses on planning, managing, and providing therapeutic services, diagnostics services, health informatics, support services, and biotechnology research and development. To pursue a career in the health science industry, students should learn to reason, think critically, make decisions, solve problems, communicate effectively, and work well with others."
                    btn="Learn More"

                />
                <Card
                    title="Science, Technology, Engineering, and Mathematics (STEM)"
                    body="The Science, Technology, Engineering, and Mathematics (STEM) Career Cluster® focuses on planning, managing, and providing, scientific research and professional and technical services, including laboratory and testing services, and research and development services."
                    btn="Learn More"

                />
                </div>
            </div>

        </div>



    );
}

export default Home;