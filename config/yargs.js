const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', "Crea un archivo .txt con el nombre tabla-'base_introducida'.txt, con la tabla de multiplicar", opts)
    .help()
    .argv;

module.exports = {
    argv
}