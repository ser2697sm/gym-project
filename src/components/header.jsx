import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"

const Li = ({ name, ruta }) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={ruta}>{name}</Link>
        </li>
    )
}
export function Header({logo}) {
    return(
        <header>
        <div className="container-fluid">
            <img src={logo} alt="logo" className='img-fluid rounded mx-auto d-block header-img' />
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            {/* Abra otro li para las sesiones */}
                            <Li name="Inicio" ruta={"/"}/>
                            <Li name="Instaciones" ruta={"/Instaciones"} />
                            <Li name="Monitores" />
                            <Li name="Horarios" />
                            <Li name="Actividades" />
                            <Li name="Acceso Socios" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )

}