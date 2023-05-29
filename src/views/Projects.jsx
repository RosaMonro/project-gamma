import CardProject from '../components/CardProjects/CardProject'
import '../scss/global.scss'


export default function Projects() {
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

        <main>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
        </main>

        </>
    )
}