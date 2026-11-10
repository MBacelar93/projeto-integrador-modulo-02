import { buscarUsuarios } from "./api.js";
import { mostrarCarregando, mostrarErro, limparEstado, renderizarLista } from "./ui.js";
import { debounce } from "./utils.js";

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

const falar = debounce((texto) => console.log('executou:', texto), 5000);
falar('a');
falar('ab');
falar('abc');
//finally sempre é executado após o catch. Isso faria com que a mensagem de erro fosse apagada.