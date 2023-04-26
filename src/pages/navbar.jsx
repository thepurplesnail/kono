import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styling/navbar.scss'

export default function NavBar(){
    const [onHome, setOnHome] = useState(true);
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);
    
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    const renderHome = (onHome) => onHome ? <a href = '#home'>Home</a> : <Link to = '/'>Home</Link>
    

    const goHome = () => {
        if (onHome){
            window.scrollTo(0,0);
        }
    }
    return(
        <div className={`nav-wrapper ${stickyClass}`}>
            <ul className="menu">
                <li className="menu-item">
                    {renderHome(onHome)}
                </li>
                <li className="menu-item has-submenu">
                    <a>About</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="#history">History</a></li>
                        <li className="menu-item" ><a href="#objectives">Objectives</a></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <Link to = '/members'>Members</Link>
                </li>
                <li className="menu-item"><a href="#">Awards Night</a></li>
                <li className="menu-item has-submenu">
                    <a href="#">Donations</a>
                    <ul className = 'sub-menu'>
                        <li className= 'menu-item has-submenu'>
                            <a href="#">Education</a>
                            <ul className= 'sub-menu'>
                                <li className= 'menu-item'><a href="#">Universities</a></li>
                                <li className= 'menu-item'><a href="#">Secondary Schools</a></li>
                                <li className= 'menu-item'><a href="#">Primary Schools</a></li>
                            </ul>
                        </li>
                        <li className= 'menu-item has-submenu'>
                            <a href="#">Medical</a>
                            <ul className= 'sub-menu'>
                                <li className= 'menu-item'><a href="#">Patients</a></li>
                                <li className= 'menu-item'><a href="#">Hospitals</a></li>
                            </ul>
                        </li>
                        <li className= 'menu-item'><a href="#">Orphanages</a></li>
                        <li className= 'menu-item'><a href="#">The Blinds</a></li>
                        <li className= 'menu-item'><a href="#">Entertainments</a></li>
                        <li className= 'menu-item'><a href="#">Soccer: Ibrahim Dainkeh Memorial Gala</a></li>
                        <li className= 'menu-item'><a href="#">Chiefdoms/Villages</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}