const yargs = require('yargs');
const chalk = require('chalk');


let results = yargs
    .commandDir('./lib/cmds')
    .help()
    .wrap(null)
    .strict()
    .epilogue('For more information ... read the source')
    .demandCommand()
    .argv;
