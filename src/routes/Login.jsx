import { useRef } from 'react';
import Produtos from "./Produtos";

export default function Login(){
    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem('userData');
    const getToken = sessionStorage.getItem('senhaData');

    const handleSubmit = (e) =>{
        e.preventDefault(); // Previne o comportamento padrão de submit

        if(user.current.value === 'Admin' && password.current.value === '160880'){
            //Autenticação
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem('userData', 'Admin');
            sessionStorage.setItem('senhaData', token);
            window.location.reload(); // Recarrega a página para refletir o login
        }else{
            alert("Usuário ou senha inválidos");
        }
    }

    return(
        <section>
            {getUser && getToken ? (
                <Produtos/>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usuario">Usuário:</label>
                    <input type="text" ref={user} />
                    <label htmlFor="password">Senha</label>
                    <input type="password" ref={password} />
                    <input type="submit" value="Login" />
                </form>
            )}
        </section>
    );
}
