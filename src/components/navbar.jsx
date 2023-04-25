import React, {useState, useEffect} from "react";
import '../styling/navbar.scss'

export default function NavBar(){
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

    return(
        <div className={`nav-wrapper ${stickyClass}`}>
            <ul className="menu">
                <li className="menu-item"><a href="#">Home</a></li>
                <li className="menu-item has-submenu">
                    <a href="#">About</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="#">History</a></li>
                        <li className="menu-item"><a href="#">Objectives</a></li>
                    </ul>
                </li>
                <li className="menu-item"><a href="#">Members</a></li>
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