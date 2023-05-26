
import React from 'react';
import './Icon.scss'


export default function Icon (props) {
    return (
        <img className={"size-" + props.size} src={props.url} alt={props.alt} />
    );
}