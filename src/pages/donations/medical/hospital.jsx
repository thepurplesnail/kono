import React from "react";
import hospital_1 from '../../../styling/images/donations/medical/hospitals/hospital_1.jpg';
import hospital_2 from '../../../styling/images/donations/medical/hospitals/hospital_2.jpg';

export const Hospitals = () => {
    return(
        <div className="section-wrapper scrollable" id = 'hospitals'>
            <div className="section-header">
                <h1>Hospitals</h1>
            </div>

            <div className="subsection-wrapper">
                <img src={hospital_1} className="pic" id = 'pic1'/>
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
                <img src={hospital_2} className="pic" id = 'pic2'/>
            </div>
        </div> 
    )
}