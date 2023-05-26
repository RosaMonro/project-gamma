import Icon from '../Icon/icon'
import Link from '../Links/Link'
import MyButton from '../MyButton/MyButton'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="text-color--white  max-width">

            <div className="contact">

                <p className="h2  contact__text  font-style-italic">Contacta<br/>conmigo</p>

                <hr className="horizontal-line  horizontal-line--left"></hr>

                <p className="contact__mail  font-weight-semibold  font-size-20-xs">Puedes escribirme a '
                    <MyButton  variant="primary" text="rosamaria.monro" isButton="false"></MyButton>
                    @gmail.com'</p>
                
                <div className="contact__icons">

                    <Link  url="https://codepen.io/RosaMonro" target="_blank" icon={<Icon size="small" url="../../../Icons/codepen.svg" alt="Icono con enlace a codepen"/>}></Link>
                    <Link  url="https://github.com/RosaMonro" target="_blank" icon={<Icon size="small" url="../../../Icons/github.svg" alt="Icono con enlace a github"/>}></Link>
                    <Link  url="https://www.linkedin.com/in/rosamariamonteroroman/" target="_blank" icon={<Icon size="small" url="../../../Icons/linkedin.svg" alt="Icono con enlace a linkedin"/>}></Link>

                </div>

            </div>

            <div className="thanks">

                <p className="h2  font-weight-light font-style-italic">¡Gracias!</p>
                <hr className="horizontal-line  horizontal-line--right"></hr>
                <hr className="horizontal-line  horizontal-line--right"></hr>

            </div>

        </footer>
    )
}