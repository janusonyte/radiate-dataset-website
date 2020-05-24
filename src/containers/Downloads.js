import React from 'react';
import Fade from 'react-reveal/Fade';
import fog from '../assets/fog.jpg';
import motorway from '../assets/motorway.jpg';
import night from '../assets/night.jpg';
import rain from '../assets/rain.jpg';
import snow from '../assets/snow.jpg';
import urban from '../assets/urban.jpg';
import '../containers/Downloads.css';

class Downloads extends React.Component {
    render() {
        return (
            <div id="downloads">
                <div className="spacer">

                </div>
                <Fade big>
                    <h2>
                        <a href="#downloads">Click here to select and download data</a>
                    </h2>
                    <div className="third-block-container">
                        <div className="fog">
                            <img src={fog} alt="fog" />
                        </div>
                        <div className="moto">
                            <img src={motorway} alt="motorway" />
                        </div>
                        <div className="night">
                            <img src={night} alt="night" />
                        </div>
                        <div className="rain">
                            <img src={rain} alt="rain" />
                        </div>
                        <div className="snow">
                            <img src={snow} alt="snow" />
                        </div>
                        <div className="urban">
                            <img src={urban} alt="urban" />
                        </div>
                    </div>

                </Fade>
            </div>
        );
    }
}

export default Downloads;