import './Link.scss'

export default function Link (props) {
    return (
        <a href={props.url} target="props.target">{props.icon}</a>
    );
}