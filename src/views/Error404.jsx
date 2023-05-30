import MyButton from '../components/MyButton/MyButton'
import '../scss/global.scss'

export default function Error404() {
    return (
        <div className="bg-error404">
            <p className="h1 error-text__giant color-fucsia  font-weight-semibold">¡¡Yepa!!</p>
            <p className="error error-404 font-weight-bold">404</p>
            <MyButton variant="tertiary" text="Vuelve conmigo" isButton="true" url="/Home"></MyButton>

        </div>
    )
}