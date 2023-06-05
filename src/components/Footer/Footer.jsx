import MyLink from '../MyLinks/MyLink'
import Icon from '../Icons/Icon'
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

                        <MyLink isButton={false} url="https://codepen.io/RosaMonro" target="_blank" icon={<Icon isHoverable={true} size="small" color="white" name={"IconCodepen"} alt="enlace a codepen"></Icon>}></MyLink>
                        <MyLink isButton={false} url="https://github.com/RosaMonro" target="_blank" icon={<Icon isHoverable={true} size="small" color="white" name={"IconGithub"} alt="enlace a github"></Icon>}></MyLink>
                        <MyLink isButton={false} url="https://www.linkedin.com/in/rosamariamonteroroman/" target="_blank" icon={<Icon isHoverable={true} size="small" color="white" name={"IconLinkedin"} alt="enlace a Linkedin"></Icon>}></MyLink>

                    </div>

                </div>

                <div className="arrow">
                    <MyLink isButton={false} url="#scroll-inicio" icon={<Icon isHoverable={true} size="mini" color="fucsia" name={"IconUpArraow"} alt="enlace a inicio"></Icon>}></MyLink>
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
