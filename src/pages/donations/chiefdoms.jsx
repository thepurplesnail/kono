import {React, useEffect} from "react";
import '../../styling/submenu_1/donations/chiefdoms.scss';

export const Chiefdoms = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="chiefdoms-wrapper page-container">
            <div className = 'header'>
                <h1 className="title">Chiefdoms/Villages</h1> 
            </div>
            <div className="content">
                chiefdoms
            </div>
        </div>
    )
}