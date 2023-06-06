import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../../styling/submenu_1/donations/donations.scss'

const SharedPgLink = ({id, name}) => {
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
            <div className="content">
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
                            <SharedPgLink id = 'donations/medical/#patients' name = 'Patients'/>
                            <SharedPgLink id = 'donations/medical/#hospitals' name = 'Hospitals'/>
                        </div>
                    </div>
                    <div className="card-wrapper orphanages single">
                        <h3><Link to = '/donations/orphanages'>Orphanages</Link></h3>
                    </div>

                    <div className="card-wrapper the-blinds single">
                        <h3><Link to = '/donations/the-blinds'>The Blinds</Link></h3>
                    </div>
                    <div className="card-wrapper entertainment single">
                        <h3><Link to = '/donations/entertainments'>Entertainments</Link></h3>
                    </div>
                    <div className="card-wrapper soccer single">
                        <h3><Link to = '/donations/soccer'>Soccer: Ibrahim Dainkeh Memorial Gala</Link></h3>
                    </div>
                    
                    <div className="card-wrapper villages single">
                        <h3><Link to = '/donations/chiefdoms-villages'>Chiefdoms/Villages</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}