import { useState, useEffect } from "react"
import ModalActions from "../components/ModalActions"

export default function Produtos(){
    const [produtosApi, setProdutosApi] = useState([])
    const [open, setOpen] = useState(false)
    const [prodId, setProdId] = useState(0)

    useEffect(
        () => {
            if(!open){
            fetch('http://localhost:5000/produtos')
            .then((resp) => resp.json())
            .then((resp) => setProdutosApi(resp))
            .catch((error) => console.log(error))
        }
        },[open]
    )

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/produtos/${id}`, {method: "delete"})
        .then(()=> (window.location = '/produtos'))
        .catch((error) => console.log(error))
    }

    const handleEdit = (id) =>{
        setProdId(id)
        setOpen(true)
    }
    
    return(
        <section>
            <button>Cadastrar Livro</button>
            <h1>Lista de livros</h1>
            {open ? <ModalActions open={open} id={prodId} setOpen={setOpen}/>: ""}

            
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Autor(a)</th>
                        <th>Editora</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Editar / Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosApi.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.nome}</td>
                            <td>{prod.autor}</td>
                            <td>{prod.editora}</td>
                            <td>{prod.desc}</td>
                            <td>{prod.preco}</td>
                            <td>
                                <button onClick={handleDelete.bind(this, prod.id)}>Deletar</button>
                                <button onClick={() => handleEdit(prod.id)}>Editar</button>
                            </td>

                        </tr>
                    ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6" >Listar de Livros em promoção</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}