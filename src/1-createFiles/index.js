import fs from'fs'
import { red } from 'colors'

const plusTable = ( num, len = 10 ) => {
    const nums = Array.from({ length: len}, (_, i) => i + 1)
    const title = `=====================\n     TABLA DEL ${num}\n=====================\n`
    let message = ''
    console.log(title);
    nums.forEach(digit => {
        message += `${num} x ${digit} = ${num*digit}\n` 
        console.log(`${num} ${red('x')} ${digit} ${red('=')} ${num*digit}` );
    })
    return title + message
}

const createFile = () => {
    return new Promise((resolve, reject)=>{
        let number = 6
        const path = `Tabla del ${number}.txt`

        fs.writeFile(
            path,
            plusTable(number),
            err => {
                if(err) return reject(err);
                return resolve(`El archivo ${path} ha sido almacenado`);
            }
        )
    } )
}

const createFiles = () => {
    createFile()
        .then(path => console.log(path))
        .catch(err => console.log(err))
}

export default createFiles
