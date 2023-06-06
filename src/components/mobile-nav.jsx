import React from "react";
import '../styling/component/mobile-nav.scss'
import { useStickyNav } from "../hooks/useStickyNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const MobileNav = props => {
    const stickyClass = useStickyNav();

    if (props.isOpened) {
        return(
            <FontAwesomeIcon icon={faX} id = 'close-button' onClick = {props.handleClose}/>
        )
    } return(
        <div className={`mobile-nav ${stickyClass} ${props.isOpened}`} onClick = {props.handleClick}>
            <p>MENU</p>
        </div>
    )
}