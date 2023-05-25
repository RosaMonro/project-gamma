import MyButton from '../MyButton/MyButton'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="text-color--white  max-width">

            <div className="contact">

                <p className="h2  contact__text  font-style-italic">Contacta<br/>conmigo</p>

                <hr className="horizontal-line--left"></hr>

                <p className="contact__mail  font-weight-semibold  font-size-20-xs">Puedes escribirme a <MyButton  variant="primary" text="rosamaria.monro" isButton="false"></MyButton>@gmail.com</p>
                
                <div className="contact__icons">

                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />

                </div>

            </div>

            <div className="thanks">
                <p className="h2  font-weight-light font-style-italic">¡Gracias!</p>
                <hr className="horizontal-line--right"></hr>
                <hr className="horizontal-line--right"></hr>
            </div>

        </footer>
    )
}