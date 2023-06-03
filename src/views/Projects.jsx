import CardProject from '../components/CardProjects/CardProject'
import MyLink from '../components/MyLinks/MyLink'
import '../scss/global.scss'
import React, { useEffect, useState } from 'react';


export default function Projects() {

    const [jsonData, setJsonData] = useState([]);

  useEffect(() => { //nos permite hacer la petición HTTP
    fetch('../../projects.json')
    //usamons then() para encadenar acciones a una promesa resuelta exitosamente
      .then(response => response.json()) //para obtener los datos en formato json
      .then(data => {
        setJsonData(data); //los datos se pasan a la función data y se establecen en el estado jsonData
      })
      .catch(error => {
        console.log(error);
      });
  }, []); //con un array vacío, se ejecuta una sola vez cuando se monte el componente. 

    return (
        <>

        <header className="project-header  contain-header__photo-bg ">

            <div className="project-title">

                <hr className="horizontal-line horizontal-line--center--big"></hr>
                
                <p className="h1 font-weight-bold">Proyectos <span className="giant-text">&</span></p>
                <p className="h1 font-weight-bold">aplicaciones</p>

                <hr className="horizontal-line horizontal-line--center--big"></hr>

            </div>          

        </header>

        <main className="color-bg-white-darken">

            {jsonData.map(item => (
            <CardProject
                key={item.id}
                image={item.image}
                alt={item.title}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                abstractDescription={item.abstractDescription}
                description={item.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
            />
            ))}

            <div className="link-home">
                <MyLink  variant="primary" text="Volver a al inicio" isButton="false" url="/"></MyLink>
            </div>
        </main>

        </>
    )
}