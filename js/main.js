import { buscarUsuarios } from "./api.js";
import { mostrarCarregando, mostrarErro, limparEstado, renderizarLista } from "./ui.js";

async function iniciar() {
    mostrarCarregando();

    try {
        const usuarios = await buscarUsuarios();

        limparEstado();
        renderizarLista(usuarios);

    } catch (erro) {
        console.error(erro);
        mostrarErro('Não foi possível carregar os usuários. Tente novamente.');
    }
}

iniciar();


//finally sempre é executado após o catch. Isso faria com que a mensagem de erro fosse apagada.