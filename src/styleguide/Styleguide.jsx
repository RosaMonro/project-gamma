import { IconChevron } from '../components/Icon/IconChevron';
import MyButton from '../components/MyButton/MyButton';
import Nav from './Nav/Nav';



import './Styleguide.scss';

export default function Styleguide () {
    return <>

    <body className="sg__body">
            
        <Nav />

        <section className="sg__color-palette">
            <h1 className="h2">Paleta de colores</h1>

            <div className="sg__box-1">
                <div className="sg__color-box sg__color-fucsia-darken"></div>
                <div className="sg__color-box sg__color-fucsia"></div>
                <div className="sg__color-box sg__color-fucsia-lighten"></div>
            </div>

            <div className="sg__box-2">
                <div className="sg__color-box sg__color-black"></div>
                <div className="sg__color-box sg__color-black-lighten"></div>
                <div className="sg__color-box sg__color-grey"></div>
                <div className="sg__color-box sg__color-grey-lighten"></div>
                <div className="sg__color-box sg__color-white-darken"></div>
                <div className="sg__color-box sg__color-white"></div>
            </div>
        </section>

        <section className="sg__typo">

            <h1 className="h2">Tipografía</h1>

            <div className="sg__typo--headers">
                <h1>H1 - Soy un encabezado</h1>
                <h2>H2 - Soy un encabezado</h2>
                <h3>H3 - Soy un encabezado</h3>
                <h4>H4 - Soy un encabezado</h4>
                <h5>H5 - Soy un encabezado</h5>
                <h6>H6 - Soy un encabezado</h6>
            </div>

            <div className="sg__typo--paragraph">
                <p className="font-size-24-s">Soy un párrafo - Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolores, impedit iusto cumque itaque voluptates nesciunt, debitis odit 
                    molestias ex quae eveniet voluptatem? Doloremque incidunt provident 
                    explicabo ea est illum debitis!</p>
                <p className="font-size-20-xs">Soy un párrafo - Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolores, impedit iusto cumque itaque voluptates nesciunt, debitis odit 
                    molestias ex quae eveniet voluptatem? Doloremque incidunt provident 
                    explicabo ea est illum debitis!</p>
                <p className="font-size-16-xxs">Soy un párrafo - Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolores, impedit iusto cumque itaque voluptates nesciunt, debitis odit 
                    molestias ex quae eveniet voluptatem? Doloremque incidunt provident 
                    explicabo ea est illum debitis!</p>
            </div>

        </section>

        <section  className="sg__buttons">

                <h1 className="h2">Botones y enlaces</h1>

                <div className="sg__btns">

                    <MyButton variant="primary" text="Botón" isButton="true"></MyButton>
                    <MyButton variant="secondary" text="Botón" isButton="true"></MyButton>
                    <MyButton variant="cta" text="Botón" isButton="true"></MyButton>

                </div>

                <div className="sg__links">

                    <MyButton variant="primary" text="Soy un enlace" isButton="false"></MyButton>
                    <MyButton variant="secondary" text="Soy un enlace" isButton="false"></MyButton>
                    <MyButton variant="cta" text="Soy un enlace" isButton="false"></MyButton>
                
                </div>

        </section>

        <section>

            <IconChevron></IconChevron>

        </section>

    </body>

    </>
}

