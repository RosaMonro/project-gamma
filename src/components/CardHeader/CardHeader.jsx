import MyButton from '../MyButton/MyButton'
import './CardHeader.scss'

import React, { useEffect, useState } from 'react';


export function CardHeader(props) {
    const [typedText, setTypedText] = useState('');
    const targetText = 'Frontend-UI';

  useEffect(() => {
    const delay = 200; // Delay entre cada letra (en milisegundos)
    const typeNextLetter = (index) => {
      if (index <= targetText.length) {  // verificamos si el índice actual es < o = a la longitud de targetText
        setTypedText(targetText.slice(0, index)); // Si el índice es < o =, actualizamos el estado typedText
        setTimeout(() => { // utilizamos setTimeout para llamar a la función typeNextLetter(index + 1) con un delay
          typeNextLetter(index + 1);
        }, delay);
      } else {
        setTimeout(() => {
          setTypedText(''); // restablecemos typedText a una cadena vacía
          typeNextLetter(1); // llamamos a la función para reiniciar la animación
        }, 2000); // Espera 2 segundos antes de reiniciar la animación
      }
    };

    typeNextLetter(1); // Se encarga de escribir cada letra de targetText una por una.

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
                <MyButton variant="secondary" text="Mi PORTFOLIO" isButton="true" url="/Projects"></MyButton>
                <MyButton  variant="cta" text="CONTÁCTAME" isButton="true" url="#footer-point"></MyButton>
            </div>

            <div className="header__cta">
              <p className="font-weight-light  font-size-20-xs">¡Puedes leer más <MyButton  variant="secondary" text="sobre mí" url="#sobremi-point" isButton="false"></MyButton>!</p>
            </div>

        </div>

    )
}
