import React from "react";
import secondary_1 from '../../styling/images/education/secondary/secondary-1.jpg';
import secondary_2 from '../../styling/images/education/secondary/secondary-2.jpg';

export const Secondary = () => {
    return(
        <div className="section-wrapper scrollable" id = 'secondary'>
            <div className="section-header">
                <h1>Secondary Schools</h1>
            </div>

            <div className="subsection-wrapper">
                <img src={secondary_1} className="pic" id = 'uni1'/>
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
                <img src={secondary_2} className="pic" id = 'uni2'/>
            </div>
        </div> 
    )
}