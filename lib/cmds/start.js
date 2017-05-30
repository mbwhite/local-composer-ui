'use strict';

const Monitor = require ('../monitor.js');

module.exports.command = 'start [options]';
module.exports.describe = 'start';
module.exports.builder = {
    interval: {alias: 'i', required: false, describe: 'Interval between data (ms)',default:'2000', type: 'string' }
};

module.exports.handler = (argv) => {

Monitor.start(argv);
    // argv.thePromise =  Whitelabel.start(argv)
    // .then(() => {
    //     console.log ('Command completed successfully.');
    // })
    // .catch((error) => {
    //     console.log(error+ '\nCommand failed.');
    // });
    // return argv.thePromise;
};
