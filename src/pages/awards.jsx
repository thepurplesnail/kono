import React from "react";
import clock from '../styling/images/clock.jpg'
import '../styling/awards.scss'

export const Awards = () => {
    return(
        <div className = "awards-wrapper">
            <img src = {clock} className="clock"/>
            Awards Night
        </div>
    )
}