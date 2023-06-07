import MyLink from '../MyLinks/MyLink'
import './CardProject.scss'
import '../MyLinks/MyLink.scss'
import React, { useState } from 'react';
import Icon from '../Icons/Icon';


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
                        {props.tools.map (item=><Icon 
                            isHoverable={false} 
                            size="medium" 
                            color="black" 
                            name={item.icon}>
                        </Icon>)}                        
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__description">
                    <p className="font-size-24-s">0.3</p>
                    <p className="font-size-16-xxs  expandable">
                        {expanded ? props.abstractDescription : props.description}
                        &nbsp;<span onClick={() => setExpanded(!expanded)} className="expandable-text nowrap"> {expanded ? "Leer más" : "Leer menos"}</span>
                    </p>
                </div>

                <hr className="horizontal-line horizontal-line--center"></hr>

                <div className="project__info__buttons">
                    {props.links.map (item=><MyLink  
                            isButton="true"  
                            variant="primary" 
                            text={item.text} 
                            target="_blank" 
                            url={item.url}>
                        </MyLink>)}
                </div>
            </div>

        </article>

    )
}