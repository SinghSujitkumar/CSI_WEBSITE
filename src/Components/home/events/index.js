import React from 'react';
import Image from 'react-bootstrap/Image'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const Events = () => {
return (
<div style={{paddingTop:'110px',background:'#ffffff'}}>
<div style={{position:'relative', background:'#000000', paddingTop:'5px'}}>

<h2><center> <div style={{color:'#ffffff'}}>TECHLOOP</div></center></h2>
<section id="services">
    <div className="contain wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="section-header">
                
            </div>
      </div>
      <div className="row" style={{margin:'20px'}}>
      <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/github.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">GITHUB</h2>
                    </div>
                    <div className="flip-box-back">
                        <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>GITHUB</h2>
                        <center>Learning how to manage your git accounts has become a necessity in today's code-centric era. Hence we present the GitHub workshop where you get to learn a lot of things related to Git such as Git kraken, GitHub APIs, how to pull and push requests, managing commits, access control, readme formatting, how to create private repositories and much more. </center>
                    </div>
                </div>        
            </div>    
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/php.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">PHP</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>PHP</h2>
                        <center>A developer is always a developer at heart. To nurture such ameteur developers, we bring to you our PHP Workshop. PHP as a web development option is very secure, fast and reliable. Using PHP to create a website is very simple because of the easy functions, methods and syntax of this language.</center>
                    </div>
                </div>        
            </div> 
        </div>

        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/irc.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">INTERNET RELAY CHAT</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>INTERNET RELAY CHAT</h2>
                        <center>While the World Wide Web receives the most of the publicity, another aspect of Internet also draws considerable attention. We bring to you: Internet Relay Chat workshop.</center>
                    </div>
                </div>        
            </div> 
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/boot.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">BOOTSTRAP</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>BOOTSTRAP</h2>
                        <center>Have you ever wondered how software projects are developed so fast inspite of having thousands of lines of code? It's because developers don't write HTML and CSS codes from scratch. They just pick up blocks of code for the template they want from Bootstrap and modify it if required.</center>
                    </div>
                </div>        
            </div> 
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/python.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">PYTHON</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>PYTHON</h2>
                        <center>Python programming has become a skill which all the programmers must develop. We present you our prestigious Python workshop which covers both – Core Python and Advanced Python. </center>
                    </div>
                </div>        
            </div> 
            
           
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/tpp.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">TECHNICAL PAPER PRESENTATION</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div><div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>TECHNICAL PAPER PRESENTATION</h2>
                        <center>Writing–the art of communicating thoughts to the mind , through the eye– is the greatest invention of the world.</center>
                    </div>
                </div>        
            </div> 
            
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/laravel.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">LARAVEL</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>LARAVEL</h2>
                        <center>We all are familiar with PHP and its extensive applications. PHP, being dynamic in nature is implemented with the help of Laravel. Hence we give you the perfect opportunity to master this language and its framework in our Laravel workshop.</center>
                    </div>
                </div>        
            </div> 
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/workshop/placement.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">PLACEMENT TALKS</h2>
                        </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>PLACEMENT TALKS</h2>
                        <center>Job Placements are an important phase in each and every student's life. Right from the Aptitude tests to the final HR interview rounds, the entire placement process is a nerve-wracking adventure for all of us.</center>
                    </div>
                </div>        
            </div> 
        </div>
      </div>
              
</section>
<h2><center><div style={{color:'#ffffff'}}>IN COLLABORATION</div></center></h2>
<section id="services">
      <div className="contain wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="section-header">  
            </div>
            <div className="row" style={{margin:'20px'}}>
       
            <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                            <Image src={require('../../../Resources/images/collab/race_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                            <h2 className="title">THE AMAZING RACE</h2>
                        </div>
                        <div className="flip-box-back">
                        <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                            <h2>THE AMAZING RACE</h2>
                            <center>"In the race of life make sure that the stops are worth their while."
                        We bring to you the most awaited and challenging event, 'The Amazing Race'.
                        Run your way through the corridors of VESIT solving brain teasing problems by using your logical reasoning skills and technical abilities at the same time. The smartest and fastest team wins!</center>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                            <Image src={require('../../../Resources/images/collab/ml.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                            <h2 className="title">MACHINE LEARNIN</h2>
                        </div>
                        <div className="flip-box-back">
                        <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                            <h2>MACHINE LEARNING</h2>
                            <center>Machine learning is the most trending field in today's world. It evolves from artificial intelligence and involves study of pattern recognition.
ML has countless applications including object detection, movie recommendation system, weather prediction and many more.
Hence we present a workshop on Machine Learning which covers all the basic concepts.</center>
                        </div>
                    </div>        
                </div>    
            </div>
       

            <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                            <Image src={require('../../../Resources/images/collab/sherlock_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                            <h2 className="title">SHERLOCK & WATSON</h2>
                        </div>
                        <div className="flip-box-back">
                        <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                            <h2>SHERLOCK & WATSON</h2>
                            <center>This is one of the most innovative coding event of Praxis 2018 – 'Sherlock and Watson'. The event not only challenges your agility in cracking a code like Sherlock cracks a complicated case, but it also tests your bond and coordination with your partner. After all, the success behind every Sherlock Holmes is a Dr. Watson.</center>
                        </div>
                    </div>        
                </div>    
            </div> 
            <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                            <Image src={require('../../../Resources/images/collab/ck_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                            <h2 className="title">CODE KNIGHTS</h2>
                        </div>
                        <div className="flip-box-back">
                        <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                            <h2>CODE KNIGHTS</h2>
                            <center>This pre praxis event, called code knights, is a 12 hour coding event in which participants are given 6 problem statements and they have to code the solution for it and pass all the test cases. It is an online event hence students can participate from their homes as well. The participant scoring maximum points in minimum time wins the competition!</center>
                        </div>
                    </div>        
                </div>    
            </div> 
        </div>
    </div>
</section>
<h2><center><div style={{color:'#ffffff'}}>FUN EVENTS</div></center></h2>
<section id="services">
      <div className="contain wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="section-header">  
            </div>
            <div className="row" style={{margin:'20px'}}>
            <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/fun/crico_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">CRIC-O-MANIA</h2>
                    </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>CRIC-O-MANIA</h2>
                        <center>The cricket extravaganza is returning with the IPL and ICC World cup lined up. Hence the excitement amongst all the fans is on an all time new high. To experience these colours of cricket like never before we present you the mega event of the year, CRICOMANIA.
                                    So for all the die-hard cricket fans, this is the perfect opportunity for you to make it big and shine brightly!</center>
                    </div>
                </div>        
            </div>    
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/fun/lan_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">LAN GAMING</h2>
                    </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>LAN GAMING</h2>
                        <center> Are you willing to embark on a gaming journey like never before? Take out your enemies by headshots, win a chicken dinner and go down the road of your childhood to defeat your opponents and race towards ultimate glory.
                                      We bring to you LAN Gaming, a mega event where you get a chance to display your gaming avatar to the entire college. Right from the old classics like Need for Speed, mini militia, FIFA, CS Go to the latest gaming addiction Pubg, we have it all.</center>
                    </div>
                </div>        
            </div>   
        </div> 
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/fun/hc_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">HIDDEN CIPHER</h2>
                    </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>HIDDEN CIPHER</h2>
                        <center>Don't you all love the sweet taste of triumph when you are able to crack a code or puzzle? So put on your thinking caps. We bring to you the most enthralling team event of the semester HIDDEN CIPHER .
                                              Get ready for some battle of the brains!</center>
                    </div>
                </div>        
            </div> 
        </div>
        <div className="col-lg-4 col-md-4" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <Image src={require('../../../Resources/images/fun/cityscape_main.jpg')} alt="Avatar" style={{width:"300px",height:"300px", marginTop:'10px' }}/>
                        <h2 className="title">CITYSCAPE</h2>
                    </div>
                    <div className="flip-box-back">
                    <div style={{marginTop:'300px'}} className="icon inactiveLink"><Link to="/gallery" className="border"><i className="fa fa-camera"></i></Link></div>
                        <h2>CITYSCAPE</h2>
                        <center>You think you have that urban designer in you? Do you have the innovative thinking for landscape planning coupled with top notch technical skills?
                                              We bring you the perfect event to showcase all your talent with its event – the pioneering Cityscape. The game would make you traverse through a journey never seen before – deeply rooted in collective thinking, creativity and agility as you compete with your opponents to build the perfect city of dreams.</center>
                    </div>
                </div>        
            </div>    
        </div>
        </div>
    </div>
</section>
       

</div>
</div>
);
};
export default Events;