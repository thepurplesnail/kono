import {React} from "react";
import '../styling/component/member.scss';

export const Member = (props) => {
    return(
        <div className="member-wrapper">
            <img src = {props.url} className="image"/>
            <h3 className="name">{props.name}</h3>
            <p className = 'bio'>
                <span className="tab"/>{props.bio}
            </p>
        </div>
    )
}