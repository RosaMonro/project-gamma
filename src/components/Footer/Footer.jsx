import MyLink from '../MyLinks/MyLink'
import IconCodepen from '../Icons/IconCodepen'
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

                        <MyLink isButton={false} url="https://codepen.io/RosaMonro" icon={<IconCodepen size="small" color="white" ></IconCodepen>}></MyLink>

                        {/* <Link  url="https://codepen.io/RosaMonro" target="_blank" icon={<Icon isLink="true" size="small" url="../../../Icons/codepen.svg" alt="Icono con enlace a codepen"/>}></Link>
                        <Link  url="https://github.com/RosaMonro" target="_blank" icon={<Icon isLink="true" size="small" url="../../../Icons/github.svg" alt="Icono con enlace a github"/>}></Link>
                        <Link  url="https://www.linkedin.com/in/rosamariamonteroroman/" target="_blank" icon={<Icon isLink="true" size="small" url="../../../Icons/linkedin.svg" alt="Icono con enlace a linkedin"/>}></Link> */}

                    </div>

                </div>

                <div className="arrow">
                    <IconArrow size="mini" color="fucsia"></IconArrow>
                    {/* <Link  isScroll="true" url="#scroll-inicio" icon={<Icon isLink="true" size="mini" url="../../../Icons/arrow.svg" alt="Icono con enlace a inicio"/>}></Link> */}
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
