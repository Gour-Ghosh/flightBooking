import React, { useEffect } from "react";
import infoImage from '../../assets/info.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="imgDiv">
                    <img src={infoImage} />
                </div>
                <div className="textDiv">
                    <h2 data-aos="fade-down" data-aos-duration="2500">Unaccompained Minor Lounge</h2>

                    <div className="grids grid">
                        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                            <span className="gridTitle">
                                Help Through the airport
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite  destinations.
                            </p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                            <span className="gridTitle">
                                priority Boarding
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite  destinations.
                            </p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                            <span className="gridTitle">
                                Can on the flight
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite  destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lounge