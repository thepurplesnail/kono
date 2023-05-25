import React from "react";
import '../../styling/submenu_1/education/education.scss'

import { Universities } from "./universities";
import { Secondary } from "./secondary";
import { Primary } from "./primary";

export const Education = () => {
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