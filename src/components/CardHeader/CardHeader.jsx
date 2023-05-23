import MyButton from '../MyButton/MyButton'
import './CardHeader.scss'

export function CardHeader(props) {

    return (
        <header className="header  header-bg">

        <div className="header__container">

            <div className="header__info">
                <p className="h1  font-weight-bold  font-style-italic">{props.name}</p>
                <h1 className="font-weight-light  font-style-italic">{props.role}</h1>
            </div>

            <div className="header__button">
                <MyButton variant="secondary" text="CONTÁCTAME" isButton="true"></MyButton>
                <MyButton  variant="cta" text="MI TRABAJO" isButton="true"></MyButton>
            </div>

            <div className="header__cta">
              <p className="font-weight-light  font-size-20-xs">¡Puedes leer más <MyButton  variant="secondary" text="sobre mí" isButton="false"></MyButton>!</p>
            </div>

        </div>

      </header>
    )
}