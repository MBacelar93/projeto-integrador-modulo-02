// import {buscarUsuarios} from './api.js';
// import { mostrarCarregando, mostrarErro, limparEstado } from './ui.js';

// const usuarios = await buscarUsuarios();
// console.log(usuarios);

// mostrarCarregando();
// // mostrarErro('Não possível carregar os usuários.');
// // limparEstado();

import { buscarUsuarios } from './api.js';
import { renderizarLista } from './ui.js';

const usuarios = await buscarUsuarios();
renderizarLista(usuarios);