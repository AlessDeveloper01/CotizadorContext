
export const marcas = [
    { id: 1, nombre: 'Europeo' },
    { id: 2, nombre: 'Americano' },
    { id: 3, nombre: 'Asiatico' },
]

const yearMax = new Date().getFullYear();
const yearMin = yearMax - 20;

export const years = Array.from(new Array(20), (valor, indice) => indice + yearMin).reverse();

export const planes = [
    { id: 1, nombre: 'Básico'},
    { id: 2, nombre: 'Completo' },
    { id: 3, nombre: 'Full'},
]