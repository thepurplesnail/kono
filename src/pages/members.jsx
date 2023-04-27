import {React, useEffect} from "react";
import '../styling/submenu_1/members.scss';

export const Members = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="members-wrapper">
            <div className = 'header'>
                <h1 className="title">Meet Our Members</h1>
            </div>
            <div className="content">
                <h1>Content</h1>
            </div>
        </div>
    )
}