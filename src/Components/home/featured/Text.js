import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../Resources/images/logos/icon.png'

class Text extends Component {



    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:450
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[window.innerHeight*22/100],
                timing:{duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=>{
            return(
                <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                >
                    CSI
                </div>
            ) 
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x:503,
            y:586
        }}
        enter={{
            opacity:[1],
            x:[273],
            y:[window.innerHeight/2],
            timing:{delay:300,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity, x, y})=>{
        return(
            <div className="featured_second"
                    style={{
                        opacity,
                        transform: `translate(${x}px,${y}px)`
                    }}
            >
                VESIT
            </div>
        ) 
        }}
    </Animate>
    )

    animatePlayer  = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
        }}
        enter={{
            opacity:[1],
            timing:{delay:800,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity})=>{
        return(
            <div className="featured_player"
                    style={{
                        height:'400px',
                        width:'400px',
                        opacity,
                        background: `url(${FeaturedPlayer})`,
                        transform: `translate(150%,10%)`
                    }}
            >
            </div>
        ) 
        }}
    </Animate>
    )




    animatePlayer3  = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
        }}
        enter={{
            opacity:[1],
            timing:{delay:800,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity})=>{
        return(
            <div className="featured_player"
                    style={{
                        height:window.innerWidth*50/100,
                        width:window.innerWidth*50/100,
                        opacity,
                        background: `url(${FeaturedPlayer})`,
                        position: 'absolute',
                        left:'25%',
                        top:'100px',
                    }}
            >
            </div>
        ) 
        }}
    </Animate>
    )


    animateFirst2 = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:450
            }}
            enter={{
                opacity:[1],
                x:[window.innerWidth/20],
                y:[window.innerWidth*3/10],
                timing:{duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=>{
            return(
                <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                >
                    CSI
                </div>
            ) 
            }}
        </Animate>
    )

    animateSecond2 = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x:503,
            y:586
        }}
        enter={{
            opacity:[1],
            x:[0],
                y:[window.innerWidth*55/100],
            timing:{delay:300,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity, x, y})=>{
        return(
            <div className="featured_second"
                    style={{
                        opacity,
                        transform: `translate(${x}px,${y}px)`
                    }}
            >
                VESIT
            </div>
        ) 
        }}
    </Animate>
    )


    render() {
        return (
            <div>
                <div className="featured_text hidden-xs">
                    {this.animatePlayer()}
                    {this.animateFirst()}
                    {this.animateSecond()}
                </div>
                <div style={{padding:'100px'}} className="hidden-md hidden-sm hidden-lg">
                    {this.animatePlayer3()}
                    {this.animateFirst2()}
                    {this.animateSecond2()}
                </div>
            </div>
        );
    }
}

export default Text;