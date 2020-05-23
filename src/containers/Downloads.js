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
                        <a href="https://www.dropbox.com/sh/3q6tx06g91uxert/AAA9qT_CKN2BnT8gDAlCYOqHa?dl=0&fbclid=IwAR1ctS3s5wx2skqf1Zihmtc9rekze3VWE-6ogwFwkY-iTn1Oqcwl6znCd8U">Click here to select and download data</a>
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