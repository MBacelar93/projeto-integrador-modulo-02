const elementoEstado = document.querySelector('#estado');

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