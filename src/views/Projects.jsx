import CardProject from '../components/CardProjects/CardProject'
import MyLink from '../components/MyLinks/MyLink'
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

        <main className="color-bg-white-darken">
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>

            <div className="link-home">
                <MyLink  variant="primary" text="Volver a al inicio" isButton="false" url="/"></MyLink>
                {/* <MyButton  variant="primary" text="Volver a al inicio" isButton="false" url="/"></MyButton>                    */}
            </div>
        </main>

        </>
    )
}