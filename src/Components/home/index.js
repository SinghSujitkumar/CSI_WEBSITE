import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayers from './meetPlayers';
import Promotion from './promotion';
import VunueNfo from './NFO';
import Highlights from './Highlights';
import AboutUs from './about'


const Home = () => {
    return (
        <div>
        <div style={{background:"rgb(14, 23, 49) none repeat scroll 0% 0%"}}>
            <Featured/>
            <VunueNfo/>
            </div>
            <div>
            <Highlights/>
            <AboutUs/>
        </div>
        </div>
    );
};

export default Home;