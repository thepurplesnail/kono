import {React, useEffect} from "react";
import '../../../styling/submenu_1/donations/medical.scss';
import { Patients } from "./patients";
import { Hospitals } from "./hospital";

export const Medical = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="medical-wrapper">
            <div className = 'header'>
                <h1 className="title">Medical</h1> 
            </div>
            <div className="content">
                <Patients/>
                <Hospitals/>
            </div>
        </div>
    )
}