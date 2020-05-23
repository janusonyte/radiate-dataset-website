import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import car1 from '../assets/homeimg/car1.png'
import car2 from '../assets/homeimg/car2.jpg'
import '../containers/About.css'


class About extends Component {
    render() {
        return (
            <div id="about">
                <Fade right big>
                    <div className="second-block">
                        <p>
                            We developed this dataset with the intention of producing results in three research aspects:
                                object recognition, sensor fusion, and target tracking. <br />
                                All samples were collected using Velodyne HDL-32e, Zed Stereo Camera and 79 GHz Navtech Radar CTS350-X. <br /><br />

                                This dataset was developed with the intention to be used as a radar-only system.
                                3 hours of 2D Bird's eye view data is annotated showing around 190k instances of objects.<br /><br />


                                The lidar sensor used was Velodyne HDL-32e.
                                This sensor is widely used in automotive scenarios for scene mapping and also target classification.
                                It provides a real-time 3D point-cloud. <br /><br />

                                The video sensor used for the data collection was the ZED Stereo Camera.
                                The ZED sensor provides two cameras up to 4416 x 1242 image resolution.
                                The ZED Camera provides dense depth reconstruction computation from 2 images.
                                The algorithms for dense depth reconstruction are based on computing the disparity maps between the 2 images. <br /><br />

                                Since lidar and camera have poor sensing capabilities in adverse weather conditions, we used a high resolution 79 GHz Navtech radar sensor.
                                The Navtech CTS350-X provides a high resolution scanning radar solution.<br /> <br />

                                This is the first labelled  public large scale dataset for autonomous cars perception which focuses on adverse weather and radar.
                                </p>
                        <div className="first">
                            <img src={car1} alt="Sensors" />
                            <img src={car2} alt="Positioning of the sensors" />
                        </div>
                    </div>
                </Fade>
            </div>

        )
    }
}


export default About;