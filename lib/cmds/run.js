'use strict';

const Whitelabel = require ('../whitelabel.js');

module.exports.command = 'run [options]';
module.exports.describe = 'run';
module.exports.builder = {
    interval: {alias: 'i', required: false, describe: 'Interval between data (ms)',default:'2000', type: 'string' }
};

module.exports.handler = (argv) => {

Whitelabel.run(argv);
    // argv.thePromise =  Whitelabel.start(argv)
    // .then(() => {
    //     console.log ('Command completed successfully.');
    // })
    // .catch((error) => {
    //     console.log(error+ '\nCommand failed.');
    // });
    // return argv.thePromise;
};
