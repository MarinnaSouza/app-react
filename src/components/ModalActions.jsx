import { useEffect, useState } from "react"
import styles from "../css/ModalActions.module.css"

export default function ModalActions(props){

    const id = props.id

    const [produto, setProduto] = useState({
        id: props.id,
        nome: "",
        desc: "",
        preco: "", 
        autor: "",
        editora:""
    })

    useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`, {
        method: 'GET',
        headers:{
            "Content-Type" : "application/json"
        }
    }).then((response) => response.json())
    .then((response) => setProduto(response))
    .catch((error) => console.log(error))
    },[id])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        // insrindo os dados no useState do produto
        setProduto({...produto,[name]:value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(produto)

        }).then((response) => console.log(response.status))
        .catch((error) => console.log(error))
        
        props.setOpen(false);
    }

    if(props.open){
    return(
        <div className={styles.container}>
             <h1>Editar Produto</h1>
             <button onClick={() => props.setOpen(false)}>Close-Modal</button>

             <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados do produto</legend>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Preço</label>
                            <input type="number" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Autor</label>
                            <input type="text" name="autor" id="idAutor"value={produto.autor} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Editora</label>
                            <input type="text" name="editora" id="idEditora" value={produto.editora} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>Editar</button>
                        </div>
                    </fieldset>
                </form>
             </div>
        </div>
    )
     } 


}