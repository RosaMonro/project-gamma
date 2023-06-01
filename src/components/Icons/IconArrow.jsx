import './Icon.scss'

export default function IconArrow (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        className={"icon-size--" + props.size + " color-" + props.color} 
        fill="currentColor" 
        width="24" 
        height="24">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm5-6-5-5-5 5h10Z"/>
        </svg>
    )
}