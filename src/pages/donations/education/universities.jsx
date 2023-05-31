import React from "react";
import university_1 from '../../../styling/images/donations/education/universities/universities_1.jpg';
import university_2 from '../../../styling/images/donations/education/universities/universities_2.jpg';

export const Universities = () => {
    return(
        <div className="section-wrapper scrollable" id = 'uni'>
            <div className="section-header">
                <h1>Universities</h1>
            </div>

            <div className="subsection-wrapper">
                <img src={university_1} className="pic" id = 'pic1'/>
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
                <img src={university_2} className="pic" id = 'pic2'/>
            </div>
        </div> 
    )
}