import Nav from './Nav'
import './styleguide.scss'
import Button from '../components/Btn/Btn'

export default function Styleguide () {
    return <>
        <h1>esto es la guía de estilo</h1>
        <Nav />
        <Button />

        <div className="sg--headers">
            <h1>Soy un encabezado h1</h1>
            <h2>Soy un encabezado h2</h2>
            <h3>Soy un encabezado h3</h3>
            <h4>Soy un encabezado h4</h4>
            <h5>Soy un encabezado h5</h5>
            <h6>Soy un encabezado h6</h6>
        </div>
    </>
}

// Tengo que hacer el que borde gris se vea en el navegador. 