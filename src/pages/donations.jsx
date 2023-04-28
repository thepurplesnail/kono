import {React, useEffect} from "react";
import '../styling/submenu_1/donations.scss'

export const Donations = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="donations-wrapper">
            <div className = 'header'>
                <h1 className="title">Donations</h1>
            </div>
            <div className="row">
                <div className="card-wrapper education">
                    <h2>Education</h2>
                    <div className="sub-categories" >
                            <h3>Universities</h3>
                        
                            <h3>Secondary Schools</h3>
                        
                            <h3>Primary Schools</h3>
                    </div>
                </div>

                <div className="card-wrapper medical">
                    <h2>Medical</h2>
                    <div className="sub-categories">
                        <h3>Patients</h3>
                        <h3>Hospitals</h3>
                    </div>
                </div>
                <div className="card-wrapper orphanages single">
                    <h3>Orphanages</h3>
                </div>
            </div>
            <div className="row">
                <div className="card-wrapper the-blinds single">
                    <h3>The Blinds</h3>
                </div>
                <div className="card-wrapper entertainment single">
                    <h3>Entertainments</h3>
                </div>
                <div className="card-wrapper soccer single">
                    <h3>Soccer: Ibrahim Dainkeh Memorial Gala</h3>
                </div>
            </div>
        </div>
    )
}