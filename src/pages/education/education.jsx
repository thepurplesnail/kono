import React from "react";
import '../../styling/submenu_1/education/education.scss'
import university_1 from '../../styling/images/education/universities/universities_1.jpg';
import university_2 from '../../styling/images/education/universities/universities_2.jpg';
import secondary_1 from '../../styling/images/education/secondary/secondary-1.jpg';
import secondary_2 from '../../styling/images/education/secondary/secondary-2.jpg';
import elementary_1 from '../../styling/images/education/elementary/elementary-1.jpg';
import elementary_2 from '../../styling/images/education/elementary/elementary-2.jpg';

export const Education = () => {
    return(
        <div className="education-wrapper">
            <div className = 'header'>
                <h1 className="title">Education</h1> 
            </div>
            <div className="content">
                <div className="section-wrapper" id = 'uni'>
                    <div className="section-header">
                        <h1>Universities</h1>
                    </div>

                    <div className="subsection-wrapper">
                        <img src={university_1} className="pic" id = 'uni1'/>
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
                        <img src={university_2} className="pic" id = 'uni2'/>
                    </div>
                </div> 
                <div className="section-wrapper" id = 'secondary'>
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
                <div className="section-wrapper" id = 'elementary'>
                    <div className="section-header">
                        <h1>Elementary Schools</h1>
                    </div>

                    <div className="subsection-wrapper">
                        <img src={elementary_1} className="pic" id = 'uni1'/>
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
                        <img src={elementary_2} className="pic" id = 'uni2'/>
                    </div>
                </div> 
            </div>
        </div>
    )
}