const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo Creado: ${archivo}`);
        }).catch((err) => {
            console.log('Error: ', err);
        });
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = 'a';

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log('limite', argv.limite);

// crearArchivo(base).then((archivo)=>{
//     console.log(`Archivo Creado: ${archivo}`);
// }).catch(( err )=>{
//     console.log('Error: ', err);
// });