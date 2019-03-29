import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

const Featured = () => {
    return (
        <div className="featured_wrapper" style={{background:"rgb(14, 23, 49) none repeat scroll 0% 0%"}}>
            <Stripes/>
            <Text/>
        </div>
    );
};

export default Featured;