//import readline from 'readline'

import { argv } from './config/yargs'
import { programs } from './config/programs'
//import { red } from 'colors'

const main = ()=>{
    console.clear()
    programs[argv.p]()
} 

main()