// requireds  SON LAS COSAS QUE SE IMPORTAN

// const fs = require('fs');
// const fs = require('express');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Se ha creado el archivo:`.red, colors.green(archivo));
            }).catch((err) => {
                console.log(err);
            });
        break;

    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);