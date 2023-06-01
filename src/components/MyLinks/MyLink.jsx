// import './Link.scss'

// export default function Link (props) {
//     if (props.isScroll == 'true') {
//         return <a href={props.url}>{props.icon}</a>
//     } else {
//     return <a href={props.url} target="props.target">{props.icon}</a>
//     }
// }

import './MyLink.scss'

export default function MyLink (props) {
    if (props.isButton == 'true') {
        return <a className={"btn  btn--" + props.variant}  href={props.url}>
                    {props.text ? props.text : ' '}
                    {props.icon ? props.icon : ' '}
                </a>
    } else {
        return <a className={"link  link--" + props.variant} href={props.url}>
                    {props.text ? props.text : ' '}
                    {props.icon ? props.icon : ' '}
                </a>
    }
}