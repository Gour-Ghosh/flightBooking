import axios from "axios";
import React, { useEffect, useState } from "react";
import paris from '../../assets/paris.jpg';
import dubai from '../../assets/dubai.jpg';
import newyork from '../../assets/newyork.jpg';
import london from '../../assets/london.jpg';
import traveler1 from '../../assets/traveler.jpg';
import traveler2 from '../../assets/user2.jpg';
import traveler3 from '../../assets/user3.jpg';
import traveler4 from '../../assets/user4.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Travelers = () => {
    // const [myData, setMyData] = useState([]);
    // const getData = async () => {
    //     const res = await axios.get("https://dummyjson.com/products")
    //     setMyData(res.data.products)
    // }
    // useEffect(() => {
    //     getData();
    // }, [])
    const travelers = [
        {
            "id": 1,
            "destinationImage": paris,
            "travelerImage": traveler1,
            "travelerName": 'IsraTech',
            "socialLink": '@isratech07'
        },
        {
            "id": 2,
            "destinationImage": dubai,
            "travelerImage": traveler2,
            "travelerName": 'Juma al Majid',
            "socialLink": '@jumaalmajid'
        },
        {
            "id": 3,
            "destinationImage": newyork,
            "travelerImage": traveler3,
            "travelerName": 'Cameron Smith',
            "socialLink": '@cameronsmith'
        },
        {
            "id": 4,
            "destinationImage": london,
            "travelerImage": traveler4,
            "travelerName": 'Joanne Lewsley',
            "socialLink": '@joannelewsley'
        }
    ]
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500 ">
                    Top travelers of this month!
                </h2>
                <div className="travelersContainer grid">
                    {
                        travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
                            return (
                                <div data-aos="fade-down" data-aos-duration="2500" key={id} className="singleTraveler">
                                    <img src={destinationImage} className="destinationImage" />
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className="travelerImage" />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {/* <div className="none">
                    {myData.map((data) => {
                       
                        return (
                            <div className="card" key={data.id}>
                                <h3>{data.brand}</h3>
                                <div className="thum_image"><img src={data.thumbnail} /></div>
                                <h4>{data.title}</h4>
                                <div className="thumb_description">{data.description}</div>
                            </div>
                        )
                    })}
                </div> */}




            </div>
        </div>
    )
}

export default Travelers