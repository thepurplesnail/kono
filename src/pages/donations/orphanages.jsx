import {React, useEffect} from "react";
import '../../styling/submenu_1/donations/orphanages.scss'

export const Orphanages = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="orphanages-wrapper page-container">
            <div className = 'header'>
                <h1 className="title">Orphanages</h1> 
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}