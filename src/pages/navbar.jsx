import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../styling/navbar.scss'

export const HomeLink = ({handleChange, id, name, ...props}) => {
    return(
        <li className="menu-item" onClick = {handleChange}>
            <HashLink to = {`/${id}`}>{name}</HashLink>
        </li>
    )
}

export const NonHomeLink = ({handleChange, id, name, ...props}) => {
    return(
        <li className="menu-item" onClick = {handleChange}>
            <Link to = {`/${name}`}>{name}</Link>
        </li>
    )
}

export default function NavBar(){
    const [stickyClass, setStickyClass] = useState('');
    const [onHome, setOnHome] = useState(true);

    useEffect(() => {
        if (onHome){
            window.addEventListener('scroll', stickNavbar);
            return () => window.removeEventListener('scroll', stickNavbar);
        }
      }, [onHome]);
    
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    const handleHomeClick = () => {
        setStickyClass(''); 
        setOnHome(true);
    }

    const handleNonHomeClick = () => {
        setStickyClass('sticky-nav'); 
        setOnHome(false);
    }

    return(
        <div className={`nav-wrapper ${stickyClass}`}>
            <ul className="menu">

                <HomeLink id = "#home" name = "Home" handleChange = {() => handleHomeClick()}/>

                <li className="menu-item has-submenu">
                    <HomeLink id = "#home" name = "About" handleChange = {() => handleHomeClick()}/>
                    <ul className="sub-menu">
                        <HomeLink id = "#history" name = "History" handleChange = {() => {setStickyClass('sticky-nav');}}/>
                        <HomeLink id = "#objectives" name = "Objectives" handleChange = {() => setStickyClass('sticky-nav')}/>
                    </ul>
                </li>

                <NonHomeLink name = 'Members' handleChange = {() => handleNonHomeClick()}/>
                <NonHomeLink name = 'Awards Night' handleChange = {() => handleNonHomeClick()}/>

                <li className="menu-item has-submenu">
                    <NonHomeLink name = 'Donations' handleChange = {() => setStickyClass('sticky-nav')}/>
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