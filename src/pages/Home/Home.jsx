import logo from '../../assets/img/logo.png'
import { Header } from '../../components/header'
import "./Home.css"

export function Home() {
    return (
        <>
        <Header logo={logo}/>
            <button type="button" class="btn btn-info">Darse de alta</button>
        </>
    )
}