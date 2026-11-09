const elementoEstado = document.querySelector('#estado');
const elementoLista = document.querySelector('#lista');

export function mostrarCarregando() {
    elementoEstado.textContent = '';

    const spinner = document.createElement('span');
    spinner.className = 'spinner';

    const texto = document.createElement('span');
    texto.textContent = ' Carregando...';

    elementoEstado.append(spinner, texto);
}

export function mostrarErro(mensagem) {
    elementoEstado.textContent = mensagem;
}

export function limparEstado() {
    elementoEstado.textContent = '';
}

function criarItem(usuario) {
    const li = document.createElement('li');

    const nome = document.createElement('strong');
    nome.textContent = usuario.name;

    const email = document.createElement('span');
    email.textContent = ` (${usuario.email})`;

    li.append(nome, email);

    return li;
}

export function renderizarLista(usuarios) {
    elementoLista.textContent = '';

    usuarios.forEach(usuario => {
        elementoLista.append(criarItem(usuario));
    });
}