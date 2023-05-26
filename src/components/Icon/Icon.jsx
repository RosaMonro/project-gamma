import './Icon.scss'


export default function Icon (props) {
    return (
        <img className={"icon icon-size--" + props.size} src={props.url} alt={props.alt} />
    )
}