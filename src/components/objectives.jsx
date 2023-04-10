import React from "react";
import '../styling/objectives.scss'
import dart from '../styling/images/dart.jpg';

export default function Objectives(){
    return(
    <div className="objectives-wrapper">
        <h1 className='title'>
          Objectives
        </h1>
        <div className="content">
            <img src = {dart} className="dart"/>
            <div className="text">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Enim nulla aliquet porttitor lacus luctus. Molestie at elementum eu facilisis sed odio morbi quis commodo. In ante metus dictum at 
                tempor. Massa tincidunt.
                </p>
                <p>
                    Ornare arcu odio ut sem nulla pharetra diam sit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Nunc sed augue lacus viverra 
                    vitae congue eu. Elit ut aliquam purus sit amet luctus venenatis. Mi ipsum faucibus vitae aliquet nec ullamcorper. Nisl suscipit adipiscing 
                    bibendum est ultricies integer quis auctor elit. At varius vel pharetra vel turpis nunc eget lorem dolor. Blandit massa enim nec dui nunc mattis.
                </p>
            </div>
        </div>
    </div>
    )
}