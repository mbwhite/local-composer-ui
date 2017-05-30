'use strict';

const Monitor = require ('../monitor.js');

module.exports.command = 'stop [options]';
module.exports.describe = 'stop';
module.exports.builder = {
    // intervalSeconds: {alias: 'i', required: false, describe: 'Interval between data', type: 'string' }
};

module.exports.handler = (argv) => {

Monitor.stop(argv);
    // argv.thePromise =  Whitelabel.start(argv)
    // .then(() => {
    //     console.log ('Command completed successfully.');
    // })
    // .catch((error) => {
    //     console.log(error+ '\nCommand failed.');
    // });
    // return argv.thePromise;
};
