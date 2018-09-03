const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base}, no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido: ${limite}, no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`)
                // console.log('The file has been saved!');
        });
    })


}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        return new Error(`El valor introducido base: ${base}, no es un numero`);
    }
    if (!Number(limite)) {
        return new Error(`El valor introducido limite: ${limite}, no es un numero`);
    }

    console.log('===================='.green);
    console.log(`====Tabla de ${base}====`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}