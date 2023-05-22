import './Btn.scss'

export default function MyButton (props) {
    if (props.isButton == 'true') {
        return <button className={"btn  btn--" + props.variant}>{props.text}</button>
    }else {
        return <a className={"link  link--" + props.variant} href="">Soy un enlace</a>
    }
}
