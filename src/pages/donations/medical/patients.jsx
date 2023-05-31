import React from "react";
import patients_1 from '../../../styling/images/donations/medical/patients/patients_1.jpg';
import patients_2 from '../../../styling/images/donations/medical/patients/patients_2.jpg';

export const Patients = () => {
    return(
        <div className="section-wrapper scrollable" id = 'patients'>
            <div className="section-header">
                <h1>Patients</h1>
            </div>

            <div className="subsection-wrapper">
                <img src={patients_1} className="pic" id = 'pic1'/>
                <div className="desc">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum nobis ducimus aliquam saepe amet!</p>
                </div>
            </div>

            <div className="subsection-wrapper">
                <div className="desc">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum nobis ducimus aliquam saepe amet!</p>
                </div>
                <img src={patients_2} className="pic" id = 'pic2'/>
            </div>
        </div> 
    )
}