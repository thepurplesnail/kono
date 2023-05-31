import {React, useEffect} from "react";
import '../styling/submenu_1/members.scss';
import { Member } from "../components/member";
import person1 from '../styling/images/members/person_1.jpg'
import person2 from '../styling/images/members/person_2.jpg'
import person3 from '../styling/images/members/person_3.jpg'
import person4 from '../styling/images/members/person_4.jpg'
import person5 from '../styling/images/members/person_5.jpg'
import person6 from '../styling/images/members/person_6.jpg'

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
                <div className="row">
                    <Member 
                        url = {person1} 
                        name = "Person 1" 
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />
                    <Member 
                        url = {person2} 
                        name = "Person 2" 
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />

                    <Member 
                        url = {person3} 
                        name = "Person 3" 
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />
                    <Member 
                        url = {person4} 
                        name = "Person 4"
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />
                    <Member 
                        url = {person5} 
                        name = "Person 5" 
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />

                    <Member 
                        url = {person6} 
                        name = "Person 6" 
                        bio = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo autem dolore maxime aperiam incidunt sit exercitationem eveniet doloribus, provident quis, odio debitis? Magnam deleniti maiores illum autem laboriosam unde hic!'
                    />
                </div>
            </div>
        </div>
    )
}