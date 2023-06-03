import MyLink from '../MyLinks/MyLink'
import './CardProject.scss'
import '../MyLinks/MyLink.scss'
import React, { useState } from 'react';


export default function CardProject(props) {

    const [expanded, setExpanded] = useState(true);


    return (
        <article className="project" id="scroll-inicio">
            <div className="project__img">
                <img src={props.image} alt={props.alt} />
            </div>

            <div className="project__info">

                <p className="h2  color-fucsia project__info__title">{props.title}</p>

                <div className="project__info__subtitle">
                    <p className="font-size-24-s">0.1</p>
                    <p className="font-size-16-xxs">{props.subtitle}</p>
                    <p className="font-size-16-xxs">{props.date}</p>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__tools">
                    <p className="font-size-24-s">0.2</p>
                        {/* <Icon isLink="false" size="small" url="../../../Icons/html.svg" alt="Icono con enlace a codepen"></Icon>
                        <Icon isLink="false" size="small" url="../../../Icons/css.svg" alt="Icono con enlace a codepen"></Icon> */}
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__description">
                    <p className="font-size-24-s">0.3</p>
                    <p className="font-size-16-xxs  expandable">
                        {expanded ? props.abstractDescription : props.description}
                        &nbsp;<span onClick={() => setExpanded(!expanded)} className="expandable-text"> {expanded ? "Leer más" : "Leer menos"}</span>
                    </p>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__buttons">
                    <MyLink  isButton="true"  variant="primary" text="Ver código"  target="_blank" url=""></MyLink>
                    <MyLink  isButton="true"  variant="primary" text="Ver proyecto" target="_blank" url=""></MyLink>
                </div>
            </div>

        </article>

    )
}