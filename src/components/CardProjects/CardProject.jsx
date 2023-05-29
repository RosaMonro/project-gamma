import Icon from '../Icon/Icon'
import MyButton from '../MyButton/MyButton'
import './CardProject.scss'
import '../MyButton/MyButton.scss'
import React, { useState } from 'react';


export default function CardProject() {

    const [expanded, setExpanded] = useState(true);


    return (
        <div className="project  color-bg-white-darken" id="scroll-inicio">
            <div className="project__img">
                <img src="../../../Alfa_byn.png" alt="" />
            </div>

            <div className="project__info">

                <p className="h2  color-fucsia project__info__title">Lorem Ipsum</p>

                <div className="project__info__subtitle">
                    <p className="font-size-24-s">0.1</p>
                    <p className="font-size-16-xxs">lorem ipsum dolor sit</p>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__tools">
                    <p className="font-size-24-s">0.2</p>
                        <Icon isLink="false" size="small" url="../../../Icons/html.svg" alt="Icono con enlace a codepen"></Icon>
                        <Icon isLink="false" size="small" url="../../../Icons/css.svg" alt="Icono con enlace a codepen"></Icon>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__abstract">
                    <p className="font-size-24-s">0.3</p>
                    <p className="font-size-16-xxs  expandable">
                        {expanded 
                        ? "Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies nibh sit amet ipsum tristique, ac venenatis nulla fermentum. In commodo libero at lorem scelerisque, ac blandit turpis finibus. usce malesuada sapien sed velit aliquet luctus"
                        : "Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies nibh sit amet ipsum tristique, ac venenatis nulla fermentum. In commodo libero at lorem scelerisque, ac blandit turpis finibus. usce malesuada sapien sed velit aliquet luctuLorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies nibh sit amet ipsum tristique, ac venenatis nulla fermentum. In commodo libero at lorem scelerisque, ac blandit turpis finibus. usce malesuada sapien sed velit aliquet luctuLorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies nibh sit amet ipsum tristique, ac venenatis nulla fermentum. In commodo libero at lorem scelerisque, ac blandit turpis finibus. usce malesuada sapien sed velit aliquet luctuLorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies nibh sit amet ipsum tristique, ac venenatis nulla fermentum. In commodo libero at lorem scelerisque, ac blandit turpis finibus. usce malesuada sapien sed velit aliquet luctu"}
                        &nbsp;<span onClick={() => setExpanded(!expanded)} className="expandable-text"> {expanded ? "Leer más" : "Leer menos"}</span>
                    </p>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__buttons">
                    <MyButton variant="primary" text="Ver código" isButton="true" url=""></MyButton>
                    <MyButton  variant="primary" text="Ver proyecto" isButton="true" url=""></MyButton>                   
                </div>
            </div>
        </div>
    )
}