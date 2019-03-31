import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

const Featured = () => {
    return (
        <div className="featured_wrapper"  style={{height:`${window.innerHeight-90}px`, overflow:'hidden'}}>
            <Stripes/>
            <Text/>
        </div>
    );
};

export default Featured;