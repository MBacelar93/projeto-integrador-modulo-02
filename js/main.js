import { buscarUsuarios } from "./api.js";
import { mostrarCarregando, mostrarErro, limparEstado, renderizarLista } from "./ui.js";
import { debounce } from "./utils.js";

let todosUsuarios = [];

async function iniciar() {
    mostrarCarregando();

    try {
        const usuarios = await buscarUsuarios();

        todosUsuarios = usuarios;

        limparEstado();
        renderizarLista(todosUsuarios);

    } catch (erro) {
        console.error(erro);
        mostrarErro('Não foi possível carregar os usuários. Tente novamente.');
    }
}

iniciar();