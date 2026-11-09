const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users';

export async function buscarUsuarios() {
    const resposta = await fetch(URL_USUARIOS);

    if(!resposta.ok) {
        throw new Error(`Erro HTTP ${resposta.status}`);
    }

    return await resposta.json();
}