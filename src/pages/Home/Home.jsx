import logo from '../../assets/img/logo.png'
import { Header } from '../../components/header'
import "./Home.css"

export function Home() {
    return (
        <>
        <Header logo={logo}/>
        <h1>Hola desde Home</h1>
        </>
    )
}