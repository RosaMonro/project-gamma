import Nav from './Nav/Nav'
import './styleguide.scss'

export default function Styleguide () {
    return <>
        <Nav />

        <div className="sg__headers">
            <h1>Soy un encabezado h1</h1>
            <h2>Soy un encabezado h2</h2>
            <h3>Soy un encabezado h3</h3>
            <h4>Soy un encabezado h4</h4>
            <h5>Soy un encabezado h5</h5>
            <h6>Soy un encabezado h6</h6>
        </div>
    </>
}

