import yargs from 'yargs'
import { namePrograms } from "./programs";

export const argv = yargs
    .options({
        'p': {
            alias: 'program',
            type: 'string',
            default: 'tb'
            //demandOption: true, // Hace que la opción deba enviarse de forma obligatoria
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false
        },
    })
    .check( (argv, options) => {
        if(!namePrograms.includes(argv.p)) throw `No encontramos el programa en ${namePrograms}`
        return true
    })
    .argv;