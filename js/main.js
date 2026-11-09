import {buscarUsuarios} from './api.js';

const usuarios = await buscarUsuarios();
console.log(usuarios);