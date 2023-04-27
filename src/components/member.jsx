import {React} from "react";
import '../styling/component/member.scss';

export const Member = (props) => {
    return(
        <div className="member-wrapper">
            <img src = {props.url} className="image"/>
            <h2 className="name">{props.name}</h2>
            <p className = 'bio'>
                {props.bio}
            </p>
        </div>
    )
}