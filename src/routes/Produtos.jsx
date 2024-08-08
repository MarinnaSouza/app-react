import { useState, useEffect } from "react"

export default function Produtos(){
    const [produtosApi, setProdutosApi] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:5000/produtos')
            .then((resp) => resp.json())
            .then((resp) => setProdutosApi(resp))
            .catch((error) => console.log(error))
        },[]
    )

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/produtos/${id}`, {method: "delete"})
        .then(()=> (window.location = '/produtos'))
        .catch((error) => console.log(error))
    }
    return(
        <section>
            <button>Cadastrar Livro</button>
            <h1>Lista de livros</h1>
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