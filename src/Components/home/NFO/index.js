import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon from '../../../Resources/images/logos/icon.png';


const VunueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper" style={{width:'80%'}}>
            <center>
            <div className="header_title" style={{ width:'500px', paddingTop:'20px'}}>
                <h1>OUR GOAL</h1>                        
            </div>
        </center>
                <div className="vn_wrapper">
                    <div className="row">
                        <div className="col-md-4">
                        <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                        />
                                    <div className="vn_title">
                                    Education
                                    </div>
                                    <div className="vn_desc">
                                    Learning to Excellence..
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                   
                        </div>

                        <div className="col-md-4" >
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    JOB DONE
                                    </div>
                                    <div className="vn_desc">
                                    Practice balancing different tasks..
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    </div>

<div className="col-md-4">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    Communication Skills
                                    </div>
                                    <div className="vn_desc">
                                    Improve vocal skills!..
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    </div>

<div className="col-md-4" style={{marginTop:'50px'}} >
                    
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    CERTIFIED
                                    </div>
                                    <div className="vn_desc">
                                    Certified Workshops..
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    </div>

<div className="col-md-4" style={{marginTop:'50px'}} >
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    Technical Skills
                                    </div>
                                    <div className="vn_desc">
                                    Develop Strong Technical skills..
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    </div>

<div className="col-md-4" style={{marginTop:'50px'}} >
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    Time Management
                                    </div>
                                    <div className="vn_desc">
                                    Learn to balance work..
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VunueNfo;