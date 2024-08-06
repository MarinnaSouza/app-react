import { Link } from "react-router-dom"

export default function Erro(){
    return(
    <>
       <h1>Pagina não encontrada</h1> 
       <p>Voltar para página inicial: <span><Link to="/">Voltar</Link></span></p>
    </>
)
}