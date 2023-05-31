import {React, useEffect} from "react";
import '../styling/submenu_1/donations/entertainments.scss'

export const Entertainments = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="entertainments-wrapper">
            <div className = 'header'>
                <h1 className="title">Entertainments</h1> 
            </div>
            <div className="content">
                entertainments
            </div>
        </div>
    )
}