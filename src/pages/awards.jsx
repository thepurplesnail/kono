import {React, useEffect} from "react";
import '../styling/submenu_1/awards.scss'

export const Awards = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="awards-wrapper">
            <div className = 'header'>
                <h1 className="title">Awards Night</h1>
            </div>
            <div className="content">
                <h1>Content</h1>
            </div>
        </div>
    )
}