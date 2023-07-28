import React, {useState} from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";





import logo from '../../assets/logo.png'

const Navbar = () => {
    const [active, setActive] = useState(false)
    const showNavbar = () => {
        setActive(true)
    }

     const removeNavbar = () => {
        setActive(false)
    }
    const [noBg, addBg] = useState('navBartTwo')
    const addBgColor = () => {
        if (window.scrollY>= 10) {
            addBg('navBartTwo navbar_With_Bg')
        } else {
             addBg('navBartTwo')
        }   
    } 
    window.addEventListener('scroll', addBgColor)

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon"/>
                </div>
                <div className="flex none">
                    <li className="flex"><BsPhoneVibrate/> Support</li>
                    <li className="flex"><AiOutlineGlobal/> Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo}  className="logo"/>
                </div>
                <div className={'navBarMenu ' +  (active ? 'showNavbar' : '')}> 
                    <ul className="menu flex">
                        <li onClick={removeNavbar} className="listItem">Home</li>
                        <li onClick={removeNavbar} className="listItem">About</li>
                        <li onClick={removeNavbar} className="listItem">Offers</li>
                        <li onClick={removeNavbar} className="listItem">Seats</li>
                        <li onClick={removeNavbar} className="listItem">Descriptions</li>
                    </ul>
                    <button onClick={removeNavbar} className="btn flex btnOne">Contact</button>
                     <button className="btn flex btnTwo">Contact</button>
                </div>
                <div onClick={showNavbar} className="toggleIcon">
                    <CgMenuGridO className="icon"/>
                </div>


            </div>
        </div>
    ) 
}
export default Navbar