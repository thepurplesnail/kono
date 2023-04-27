import {React, useEffect} from "react";
import '../styling/submenu_1/donations.scss'

export const Donations = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="donations-wrapper">
            <div className = 'header'>
                <h1 className="title">Donations</h1>
            </div>
            <div className="content">
                <h1>Content</h1>
            </div>
        </div>
    )
}