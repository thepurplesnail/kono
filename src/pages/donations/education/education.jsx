import {React, useEffect} from "react";
import '../../../styling/submenu_1/donations/education.scss'

import { Universities } from "./universities";
import { Secondary } from "./secondary";
import { Primary } from "./primary";

export const Education = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="education-wrapper">
            <div className = 'header'>
                <h1 className="title">Education</h1> 
            </div>
            <div className="content">
                <Universities/>
                <Secondary/>
                <Primary/>
            </div>
        </div>
    )
}