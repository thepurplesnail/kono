import React from "react";
import { useState } from "react";
import '../styling/component/mobile-nav.scss'
import { useStickyNav } from "../hooks/useStickyNav";

export const MobileNav = props => {
    const stickyClass = useStickyNav();
    const [isOpened, setIsOpened] = useState('');
    
    const handleClick = () => {
        props.handleClick();
        setIsOpened('is-opened');
    }

    return(
        <div className={`mobile-nav ${stickyClass} ${isOpened}`} onClick = {handleClick}>
            <p>MENU</p>
        </div>
    )
}