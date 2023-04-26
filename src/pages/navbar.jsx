import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../styling/navbar.scss'

export const HomeLink = props => {
    return(
        <li className="menu-item">
            <HashLink to = {`/${props.id}`}>{props.name}</HashLink>
        </li>
    )
}

export const NonHomeLink = props => {
    return(
        <li className="menu-item" onClick = {props.handleChange()}>
            <Link to = {`/${props.name}`}>{props.name}</Link>
        </li>
    )
}

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
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    return(
        <div className={`nav-wrapper ${stickyClass}`}>
            <ul className="menu">

                <HomeLink onHome = {onHome} id = "#home" name = "Home"/>

                <li className="menu-item has-submenu">
                    <HomeLink onHome = {onHome} id = "#home" name = "About" />
                    <ul className="sub-menu">
                        <HomeLink onHome = {onHome} id = "#history" name = "History" />
                        <HomeLink onHome = {onHome} id = "#objectives" name = "Objectives"/>
                    </ul>
                </li>

                <NonHomeLink name = 'Members' handleChange = {() => setOnHome(false)}/>
                <NonHomeLink name = 'Awards Night' handleChange = {() => setOnHome(false)}/>

                <li className="menu-item has-submenu">
                    <NonHomeLink name = 'Donations' handleChange = {() => setOnHome(false)}/>
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