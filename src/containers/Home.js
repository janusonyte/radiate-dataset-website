import React from 'react';
import Fade from 'react-reveal/Fade';
import radiatelogo from '../assets/logo.png';
import logohw from '../assets/logo-hw.png';
import logorobotics from '../assets/logo-ecr.jpg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Fade big>
                    <div className="first-block-container">
                        <img src={radiatelogo} alt="RADIATE" />
                        <h2>Heriot-Watt University has developed a dataset for autonomous car
                            research domain, for all-weather scenarions, <br />
                            aiming to advance the research in the field of object detection,
                            tracking and domain adaptation.
                        </h2>
                    </div>
                    <div className="first-block-container-logos">
                        <img src={logohw} alt="HW" height="50px" width="105px" />
                        <img src={logorobotics} alt="Robotics" height="100px" width="100px" />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Home;