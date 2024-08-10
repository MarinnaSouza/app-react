import styles from "../css/ModalActions.module.css"

export default function ModalActions(props){
    if(props.open){
    return(
        <div className={styles.container}>
             <h1>Adicionar Produtos</h1>
             <button onClick={() => props.setOpen(false)}>Close-Modal</button>

             <div>
                <form action="">
                    <fieldset>
                        <legend>Dados do produto</legend>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" name="nome" id="idNome" />
                        </div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <input type="text" name="desc" id="idDesc" />
                        </div>
                        <div>
                            <label htmlFor="">Preço</label>
                            <input type="number" name="preco" id="idPreco" />
                        </div>
                        <div>
                            <label htmlFor="">Autor</label>
                            <input type="text" name="autor" id="idAutor" />
                        </div>
                        <div>
                            <label htmlFor="">Editora</label>
                            <input type="text" name="editora" id="idEditora" />
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