import './Link.scss'

export default function Link (props) {
    if (props.isScroll == 'true') {
        return <a href={props.url}>{props.icon}</a>
    } else {
    return <a href={props.url} target="props.target">{props.icon}</a>
    }
}