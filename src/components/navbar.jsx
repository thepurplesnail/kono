import React from "react";
import { Link } from "react-router-dom";
import { useStickyNav } from "../hooks/useStickyNav";
import { HashLink } from "react-router-hash-link";
import '../styling/navbar.scss';

export const SharedPgLink = ({id, name, handleClick}) => {
    return(
        <li className="menu-item" onClick={handleClick}>
            <HashLink to = {`/${id}`}>{name}</HashLink>
        </li>
    )
}

export const PgLink = ({name, linkName, handleClick = () => {}}) => {
    return(
        <li className="menu-item" 
            onClick = {
                ()=> {
                    window.scrollTo(0,0);
                    handleClick();
                }}>
            <Link to = {`/${linkName}`}>{name}</Link>
        </li>
    )
}

export default function NavBar(props){
    
    const stickyClass = useStickyNav();

    return(
        <div className={`nav-wrapper ${stickyClass} ${props.isActive}`}>
            <ul className="menu">

                <SharedPgLink id = "#home" name = "Home" handleClick={props.handleClose}/>

                <li className="menu-item has-submenu">
                    <SharedPgLink id = "#home" name = "About"/>
                    <ul className="sub-menu">
                        <SharedPgLink id = "#history" name = "History" handleClick={props.handleClose}/>
                        <SharedPgLink id = "#objectives" name = "Objectives" handleClick={props.handleClose}/>
                    </ul>
                </li>
                
                <PgLink name = 'Members' linkName='members' handleClick={props.handleClose}/>
                <PgLink name = 'Awards Night' linkName = 'awards night' handleClick={props.handleClose}/>

                <li className="menu-item has-submenu">
                    <PgLink name = 'Donations' linkName = "donations"/>
                    <ul className = 'sub-menu'>
                        <li className= 'menu-item has-submenu'>
                            <PgLink name = 'Education' linkName = 'donations/education'/>
                            <ul className= 'sub-menu'>
                                <SharedPgLink name = 'Universities' id = 'donations/education/#uni' handleClick={props.handleClose}/>
                                <SharedPgLink name = 'Secondary Schools' id = 'donations/education/#secondary' handleClick={props.handleClose}/>
                                <SharedPgLink name = 'Primary Schools' id = 'donations/education/#primary' handleClick={props.handleClose}/>
                            </ul>
                        </li>
                        <li className= 'menu-item has-submenu'>
                            <PgLink name = 'Medical' linkName = 'donations/medical' />
                            <ul className= 'sub-menu'>
                                <SharedPgLink name = 'Patients' id = 'donations/medical/#patients' handleClick={props.handleClose}/>
                                <SharedPgLink name = 'Hospitals' id = 'donations/medical/#hospitals' handleClick={props.handleClose}/>
                            </ul>
                        </li>
                        <li className= 'menu-item'><PgLink name = 'Orphanages' linkName = 'donations/orphanages' handleClick={props.handleClose}/></li>
                        <li className= 'menu-item'><PgLink name = 'The Blinds' linkName = 'donations/the-blinds' handleClick={props.handleClose}/></li>
                        <li className= 'menu-item'><PgLink name = 'Entertainments' linkName = 'donations/entertainments' handleClick={props.handleClose}/></li>
                        <li className= 'menu-item'><PgLink name = 'Soccer: Ibrahim Dainkeh Memorial Gala' linkName = 'donations/soccer' handleClick={props.handleClose}/></li>
                        <li className= 'menu-item'><PgLink name = 'Chiefdoms/Villages' linkName = 'donations/chiefdoms-villages'handleClick={props.handleClose}/></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}