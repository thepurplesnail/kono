import {React, useEffect, useState} from "react";
import '../styling/submenu_1/awards.scss'
import pic_1 from '../styling/images/awards_night/1.jpg'
import pic_2 from '../styling/images/awards_night/2.jpg'
import pic_3 from '../styling/images/awards_night/3.jpg'

const bios = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint autem, obcaecati quae accusantium inventore nobis rerum iure iste numquam.",
    "Dolor sit amet consectetur adipisicing elit. Perspiciatis sint autem, obcaecati quae accusantium inventore nobis rerum iure.",
    "Perspiciatis sint autem, obcaecati quae accusantium inventore nobis rerum iure iste numquam quod cupiditate, nostrum in assumenda."
]

export const Awards = () => {

    const [isShown, setIsShown] = useState(false);
    
    useEffect(()=>{
        window.scrollTo(0,0);
        window.history.scrollRestoration = 'manual'
    }, [])

    return(
        <div className="awards-wrapper page-container">
            <div className = 'header'>
                <h1 className="title">Awards Night</h1>
            </div>
            <div className="content">
                <div id="carouselExampleIndicators" 
                    class="carousel slide" 
                    data-interval="false"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators"></li>
                        <li data-target="#carouselExampleIndicators"></li>
                        <li data-target="#carouselExampleIndicators"></li>
                    </ol>
                    <div class="carousel-inner">

                        <div class='carousel-item active'>
                            <img class="d-block w-100" src={pic_1}/>
                            {isShown && 
                                <div class="carousel-caption d-md-block">
                                    <h5>First Slide Label</h5>
                                    <p>{bios[0]}</p>
                                </div>
                            }
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={pic_2}/>
                            {isShown && 
                                <div class="carousel-caption d-md-block">
                                    <h5>Second Slide Label</h5>
                                    <p>{bios[1]}</p>
                                </div>
                            }
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={pic_3}/>
                            {isShown && 
                                <div class="carousel-caption d-md-block">
                                    <h5>Third Slide Label</h5>
                                    <p>{bios[2]}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="description">
                    <h2 className="">Lorem Ipsum</h2>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aspernatur alias deleniti nisi a doloribus sunt accusamus commodi, harum vel 
                    voluptatem asperiores fugiat at quasi placeat dolorem minus! Doloremque, 
                    veritatis similique.</p>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aspernatur alias deleniti nisi a doloribus sunt accusamus commodi, harum vel 
                    voluptatem asperiores fugiat at quasi placeat dolorem minus! Doloremque, 
                    veritatis similique.</p>
                </div>
            </div>
        </div>
    )
}