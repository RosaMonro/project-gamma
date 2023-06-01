import './Icon.scss'

export default function IconWordpress (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            className={"icon-size--" + props.size + " color-" + props.color} 
            fill="currentColor" 
            width="24" 
            height="24"
            viewBox="0 0 24 24"
            alt={props.alt}>
            <path  d="M3.42 12c0-1.24.27-2.42.74-3.5l4.1 11.22A8.563 8.563 0 0 1 3.42 12Zm14.37-.43c0 .73-.29 1.58-.65 2.77l-.86 2.86-3.1-9.2.98-.1c.47-.06.41-.74-.05-.71 0 0-1.39.11-2.29.11l-2.26-.11c-.46-.03-.51.68-.06.71l.91.1 1.34 3.64-1.88 5.63L6.74 8l.99-.1c.46-.06.4-.74-.06-.71 0 0-1.39.11-2.29.11l-.55-.01C6.37 4.96 9 3.42 12 3.42c2.23 0 4.27.86 5.79 2.25h-.11c-.84 0-1.44.73-1.44 1.52 0 .71.41 1.31.84 2.01.33.57.71 1.3.71 2.37Zm-5.64 1.18 2.64 7.22.06.12c-.89.32-1.85.49-2.85.49-.84 0-1.65-.12-2.42-.35l2.57-7.48Zm7.38-4.87A8.548 8.548 0 0 1 20.58 12c0 3.16-1.72 5.93-4.27 7.41l2.62-7.57c.49-1.22.66-2.2.66-3.07l-.06-.89ZM12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 19.54c5.26 0 9.54-4.28 9.54-9.54 0-5.26-4.28-9.54-9.54-9.54-5.26 0-9.54 4.28-9.54 9.54 0 5.26 4.28 9.54 9.54 9.54Z"/>
        </svg>
    )
}

