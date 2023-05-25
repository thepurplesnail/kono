import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../styling/submenu_1/donations.scss'

const SharedPgLink = ({id, name, ...props}) => {
    return(
        <h3>
            <HashLink to = {`/${id}`}>{name}</HashLink>
        </h3>
    )
}

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
            <div className="card-row">
                <div className="card-wrapper education">
                    <h2><Link to = '/donations/education'>Education</Link></h2>
                    <div className="sub-categories" >
                        <SharedPgLink id = 'donations/education/#uni' name = 'Universities'/>
                        <SharedPgLink id = 'donations/education/#secondary' name = 'Secondary Schools'/>
                        <SharedPgLink id = 'donations/education/#primary' name = 'Primary Schools'/>
                    </div>
                </div>

                <div className="card-wrapper medical">
                    <h2><Link to = '/donations/medical'>Medical</Link></h2>
                    <div className="sub-categories">
                        <h3>Patients</h3>
                        <h3>Hospitals</h3>
                    </div>
                </div>
                <div className="card-wrapper orphanages single">
                    <h3>Orphanages</h3>
                </div>
            </div>
            <div className="card-row">
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
            <div className="card-row">
                <div className="card-wrapper villages single">
                    <h3>Chiefdoms/Villages</h3>
                </div>
            </div>
        </div>
    )
}