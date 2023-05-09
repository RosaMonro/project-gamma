import Nav from './Nav/Nav';
import './Styleguide.scss';

export default function Styleguide () {
    return <>

        <Nav />

        <section className="sg__color-palette">
            <h1>Paleta de colores</h1>

            <div className="sg__box-1">
                <div className="sg__color-box color-fucsia-darken-1"></div>
                <div className="sg__color-box color-fucsia-darken-2"></div>
                <div className="sg__color-box color-fucsia"></div>
                <div className="sg__color-box color-fucsia-light-1"></div>
                <div className="sg__color-box color-fucsia-light-2"></div>
            </div>

            <div className="sg__box-2">
                <div className="sg__color-box color-black"></div>
                <div className="sg__color-box color-grey-1"></div>
                <div className="sg__color-box color-grey-2"></div>
                <div className="sg__color-box color-grey-3"></div>
                <div className="sg__color-box color-white"></div>
            </div>
        </section>

        <section className="sg__typo">
            <div className="sg__typo--headers">
                <h1>Soy un encabezado h1</h1>
                <h2>Soy un encabezado h2</h2>
                <h3>Soy un encabezado h3</h3>
                <h4>Soy un encabezado h4</h4>
                <h5>Soy un encabezado h5</h5>
                <h6>Soy un encabezado h6</h6>
            </div>

            <div className="sg__typo--paragraf">
                <h1>Soy un encabezado h1</h1>
                <h2>Soy un encabezado h2</h2>
                <h3>Soy un encabezado h3</h3>
                <h4>Soy un encabezado h4</h4>
                <h5>Soy un encabezado h5</h5>
                <h6>Soy un encabezado h6</h6>
            </div>
        </section>

    </>
}

