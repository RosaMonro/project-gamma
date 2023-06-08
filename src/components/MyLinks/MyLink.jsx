import './MyLink.scss'

export default function MyLink (props) {
    if (props.isButton == 'true') {
        return <a className={"btn  btn--" + props.variant}  href={props.url} target={props.target ? props.target : "_self"}>
                    {props.text ? props.text : ' '}
                    {props.icon ? props.icon : ' '}
                </a>
    } else {
        return <a className={"link  link--" + props.variant} href={props.url} target={props.target ? props.target : "_self"}>
                    {props.text ? props.text : ' '}
                    {props.icon ? props.icon : ' '}
                </a>
    }
}