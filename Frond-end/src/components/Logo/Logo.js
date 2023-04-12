import React from "react";
import { Tilt } from 'react-tilt'
import './Logo.css'
import brain from './brain.svg'

const Logo = () => {
    return (
        <div className='ma4 mt4'>
            <Tilt className="Tilt br3 shadow-3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img alt='pic' src={brain}/></div>
            </Tilt>
        </div>
    )
}

export default Logo