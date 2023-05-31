import {React, useEffect} from "react";
import '../../styling/submenu_1/donations/blinds.scss'

export const Blinds = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="blinds-wrapper">
            <div className = 'header'>
                <h1 className="title">The Blinds</h1> 
            </div>
            <div className="content">
                The Blinds
            </div>
        </div>
    )
}