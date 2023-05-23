import MyButton from '../MyButton/MyButton'
import './CardHeader.scss'

import React, { useEffect, useState } from 'react';


export function CardHeader(props) {
    const [typedText, setTypedText] = useState('');
  const targetText = 'Frontend-UI';

  useEffect(() => {
    const delay = 200; // Delay entre cada letra (en milisegundos)
    const typeNextLetter = (index) => {
      if (index <= targetText.length) {
        setTypedText(targetText.slice(0, index));
        setTimeout(() => {
          typeNextLetter(index + 1);
        }, delay);
      } else {
        setTimeout(() => {
          setTypedText('');
          typeNextLetter(1);
        }, 2000); // Espera 2 segundos antes de reiniciar la animación
      }
    };

    typeNextLetter(1);

    return () => {
      clearTimeout();
    };
  }, []);


    return (

        <div className="header__container">

            <div className="header__info">
                <p className="h1  font-weight-bold  font-style-italic">{props.name}</p>
                <h1 className="font-weight-light  font-style-italic">{typedText}</h1>
            </div>

            <div className="header__button">
                <MyButton variant="secondary" text="CONTÁCTAME" isButton="true"></MyButton>
                <MyButton  variant="cta" text="MI TRABAJO" isButton="true"></MyButton>
            </div>

            <div className="header__cta">
              <p className="font-weight-light  font-size-20-xs">¡Puedes leer más <MyButton  variant="secondary" text="sobre mí" isButton="false"></MyButton>!</p>
            </div>

        </div>

    )
}