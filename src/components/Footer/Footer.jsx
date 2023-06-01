import MyLink from '../MyLinks/MyLink'
import IconCodepen from '../Icons/IconCodepen'
import IconGithub from '../Icons/IconGithub'
import IconLinkedin from '../Icons/IconLinkedin'
import IconArrow from '../Icons/IconArrow'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="text-color--white  max-width  color-bg-black" id="footer-point">

            <div className="contactandarrow">

                <div className="contact">

                    <p className="h2  contact__text  font-style-italic">Contacta<br/>conmigo</p>

                    <hr className="horizontal-line  horizontal-line--left"></hr>

                    <p className="contact__mail  font-weight-semibold  font-size-20-xs">Puedes escribirme a&nbsp;
                        <span className="nowrap">
                            <MyLink  variant="primary" text="rosamaria.monro" url="mailto:rosamaria.monro@gmail.com" isButton="false"></MyLink>
                        @gmail.com</span></p>
                    
                    <div className="contact__icons">

                        <MyLink isButton={false} url="https://codepen.io/RosaMonro" target="_blank" icon={<IconCodepen size="small" color="white" alt="enlace a codepen"></IconCodepen>}></MyLink>
                        <MyLink isButton={false} url="https://github.com/RosaMonro" target="_blank" icon={<IconGithub size="small" color="white" alt="enlace a github"></IconGithub>}></MyLink>
                        <MyLink isButton={false} url="https://www.linkedin.com/in/rosamariamonteroroman/" target="_blank" icon={<IconLinkedin size="small" color="white" alt="enlace a Linkedin"></IconLinkedin>}></MyLink>

                    </div>

                </div>

                <div className="arrow">
                    <MyLink isButton={false} url="#scroll-inicio" icon={<IconArrow size="mini" color="fucsia" alt="enlace a inicio"></IconArrow>}></MyLink>
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
