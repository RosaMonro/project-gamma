
import React from 'react';
import './Icon.scss'
//
// size: height - width
// alt
// url
//

export default function Icon (props) {
    return (
        <img className={props.size} src={props.url} alt={props.alt} />
    );
}