import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Image from 'react-bootstrap/Image'
import icon from '../../../Resources/images/logos/icon.png';

function Header() {
    // Import result is the URL of your image
    return <img src={icon} alt="Logo"  />;
  }

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


   
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }

    

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <div style={{height:'300px'}}>
                    <Fade>     
                    <Image src={icon} style={{width:'300px'}}/> 
                    <br/>                
                    </Fade>
                    <div style={{border: '3px solid #f1f1f1', padding:'20px'}}>
                    Contact us and we'll get back to you within 24 hours.
                    495/497, Collector colony, Chembur East, Mumbai-400074
                    <br/>
                    Adarsh Shetty : +91 9769799380
                    adarshshetty997@gmail.com
                    <br/>
                    Ajay More : +91 7718965189
                    ajaymore118.am@gmail.com 
                    </div>
                    </div>
                    
                    <Slide right>
                        <div style={{paddingLeft:"100px"}} className="discount_description">
                            <h3>ABOUT CSI-VESIT</h3>
                            <p>
                            Growing in an environment supported by integrity ,a passion of development was always the moto of CSI Vesit, providing various platforms for students in the form of Editor, Technical,Web Editor, Operantional, Public Relational and then binding them together to get a high functional output in terms of productivity ans consistency.
                            </p>
                            <p>
                                
                                CSI-VESIT is a society which has conducted various events throughout the year for the welfare of all students. The society conducts various competitions to test the mettle of the participants in various fields; from uplifting their technical knowledge through Hackathons to checking their management skills and general knowledge through events like Business Quiz and Cricomania. We at CSI-VESIT conduct a plethora of technical workshops like Python, WordPress, PHP, etc for the benefit of the students.
                            </p>
                        </div>
                    </Slide>
                    


                </div>
            </div>
        );
    }
}

export default Discount;