import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../styling/navbar.scss'

export const SharedPgLink = ({id, name}) => {
    return(
        <li className="menu-item">
            <HashLink to = {`/${id}`}>{name}</HashLink>
        </li>
    )
}

export const PgLink = ({name, linkName}) => {
    return(
        <li className="menu-item" onClick = {()=> {window.scrollTo(0,0)}}>
            <Link to = {`/${linkName}`}>{name}</Link>
        </li>
    )
}

export default function NavBar(){
    const [stickyClass, setStickyClass] = useState('');
    const [onHome, setOnHome] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/#home' || location.pathname === '/#objectives' || location.pathname === '/#history'){
            setOnHome(true);
            setStickyClass('');
        } else {
            setOnHome(false);
            setStickyClass('sticky-nav');
        }
    }, [location, onHome])

    useEffect(() => {
        if (onHome){
            window.addEventListener('scroll', stickNavbar);
            return () => window.removeEventListener('scroll', stickNavbar);
        } else {
            setStickyClass('sticky-nav');
        }
      }, [onHome]);
    
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    return(
        <div className={`nav-wrapper ${stickyClass}`}>
            <ul className="menu">

                <SharedPgLink id = "#home" name = "Home"/>

                <li className="menu-item has-submenu">
                    <SharedPgLink id = "#home" name = "About"/>
                    <ul className="sub-menu">
                        <SharedPgLink id = "#history" name = "History"/>
                        <SharedPgLink id = "#objectives" name = "Objectives"/>
                    </ul>
                </li>

                <PgLink name = 'Members' linkName='members'/>
                <PgLink name = 'Awards Night' linkName = 'awards night'/>

                <li className="menu-item has-submenu">
                    <PgLink name = 'Donations' linkName = "donations"/>
                    <ul className = 'sub-menu'>
                        <li className= 'menu-item has-submenu'>
                            <PgLink name = 'Education' linkName = 'donations/education'/>
                            <ul className= 'sub-menu'>
                                <SharedPgLink name = 'Universities' id = 'donations/education/#uni'/>
                                <SharedPgLink name = 'Secondary Schools' id = 'donations/education/#secondary'/>
                                <SharedPgLink name = 'Primary Schools' id = 'donations/education/#primary'/>
                            </ul>
                        </li>
                        <li className= 'menu-item has-submenu'>
                            <PgLink name = 'Medical' linkName = 'donations/medical'/>
                            <ul className= 'sub-menu'>
                                <SharedPgLink name = 'Patients' id = 'donations/medical/#patients'/>
                                <SharedPgLink name = 'Hospitals' id = 'donations/medical/#hospitals'/>
                            </ul>
                        </li>
                        <li className= 'menu-item'><PgLink name = 'Orphanages' linkName = 'donations/orphanages'/></li>
                        <li className= 'menu-item'><PgLink name = 'The Blinds' linkName = 'donations/the-blinds'/></li>
                        <li className= 'menu-item'><PgLink name = 'Entertainments' linkName = 'donations/entertainments'/></li>
                        <li className= 'menu-item'><PgLink name = 'Soccer: Ibrahim Dainkeh Memorial Gala' linkName = 'donations/soccer'/></li>
                        <li className= 'menu-item'><PgLink name = 'Chiefdoms/Villages' linkName = 'donations/chiefdoms-villages'/></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}