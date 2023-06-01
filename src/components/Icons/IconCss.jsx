import './Icon.scss'

export default function IconCss (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            className={"icon-size--" + props.size + " color-" + props.color} 
            fill="currentColor" 
            width="24" 
            height="24"
            viewBox="0 0 24 24"
            alt={props.alt}>
            <path d="m5 3-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5Z"/>
        </svg>
    )
}