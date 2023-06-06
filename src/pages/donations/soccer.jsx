import {React, useEffect} from "react";
import '../../styling/submenu_1/donations/soccer.scss';

export const Soccer = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="soccer-wrapper page-container">
            <div className = 'header'>
                <h1 className="title">Soccer: Ibrahim Dainkeh Memorial Gala</h1> 
            </div>
            <div className="content">
                soccer
            </div>
        </div>
    )
}