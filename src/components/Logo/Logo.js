import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0"
        style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Tilt tiltMaxAngleX={55} tiltMaxAngleY={55}>
                <div className="br2 shadow-2 logo pa4">
                    <img src={Brain} style={{paddingTop : '15px'}}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;