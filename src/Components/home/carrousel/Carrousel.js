import React from 'react';
import Slider from "react-slick";
import slide1 from '../../../Resources/images/slide1.jpg';
import slide2 from '../../../Resources/images/workshop/git1.jpg';
import slide3 from '../../../Resources/images/slide3.jpg';

const Carrousel = () => {

    const settings ={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }

    return (
        <div
         className="carrousel_wrapper"
         style={{
             height:`${window.innerHeight}px`,
             overflow:'hidden'
         }}
        >

        <Slider {...settings}>
            <div>
                <div 
                   className="carrousel_image"
                   style={{
                       background:`url(${slide1})`,
                       height:`${window.innerHeight}px`
                   }}
                    >
                </div>
            </div>
            <div>
                <div 
                    className="carrousel_image"
                    style={{
                        background:`url(${slide2})`,
                        height:`${window.innerHeight}px`
                    }}
                    >
                    </div>
            </div>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background:`url(${slide3})`,
                        height:`${window.innerHeight}px`
                    }}
                
                >
                </div>
            </div>

        </Slider>
            
        </div>
    );
};

export default Carrousel;