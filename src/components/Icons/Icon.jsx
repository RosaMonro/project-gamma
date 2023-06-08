import { iconMap } from './iconMap'
import './Icon.scss'


export default function Icon (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            
            className={"icon-size--" + props.size + " color-" + props.color + (props.isHoverable == true ? " icon-hoverable" : '')} 
            fill="currentColor" 
            width="24" 
            height="24"
            viewBox='0 0 24 24'
            alt={props.alt}>
            <path d={iconMap[props.name]}/>
        </svg>
    )
}

