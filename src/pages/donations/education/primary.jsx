import React from "react";
import elementary_1 from '../../../styling/images/donations/education/elementary/elementary-1.jpg';
import elementary_2 from '../../../styling/images/donations/education/elementary/elementary-2.jpg';

export const Primary = () => {
    return(
        <div className="section-wrapper scrollable" id = 'primary'>
            <div className="section-header">
                <h1>Primary Schools</h1>
            </div>

            <div className="subsection-wrapper">
                <img src={elementary_1} className="pic" id = 'pic1'/>
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
                <img src={elementary_2} className="pic" id = 'pic2'/>
            </div>
        </div>
    )
}