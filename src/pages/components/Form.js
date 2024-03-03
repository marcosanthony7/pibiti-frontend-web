import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome);
        console.log(senha);
        // setNome(nome)
        console.log('Cadastrou o usuario');
    }

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" onClick={cadastrarUsuario} />
                </div>
                {nome}
            </form>
        </div>
    )
}

export default Form;
