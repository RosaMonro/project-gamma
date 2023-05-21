import './Btn.scss'

export default function Button () {
    return <>
        <div className="sg__btn">
            <button className="btn  btn--primary">Botón</button>
            <button className="btn  btn--secondary">Botón</button>
            <button className="btn  btn--cta">Botón</button>
        </div>

        <div className="sg__btn">
            <a className="sg__link  link--primary" href="">Soy un enlace</a>
            <a className="sg__link  link--secondary" href="">Soy un enlace</a>
            <a className="sg__link  link--cta" href="">Soy un enlace</a>
        </div>
    </>
}