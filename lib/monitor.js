const forever = require('forever');
const homedir = require('homedir');
const path = require('path');
const fs = require('fs');
/**

 */
class Monitor {

  static start(argv){

       console.log('Creating a new child');

        var child = new (forever.Monitor)('index.js', {
          max: 1,
          args: [argv],
          logFile             : 'forever.log',
          outFile             : 'out.log',
          errFile : 'err.log'
        });

        child.on('exit', function () {
          console.log('exit event called');
        });

        console.log('Start the daemon I hope');

        var home = homedir();

        if (! fs.existsSync(path.resolve(home,'.composer-playground'))){
          fs.mkdirSync(path.resolve(home,'.composer-playground'));
        }

        forever.startDaemon('./node_modules/composer-playground/cli.js', {
          max: 1,
          args: [argv],
          logFile             : path.resolve(home,'.composer-playground','forever.log'),
          outFile             : path.resolve(home,'.composer-playground','out.log'),
          errFile             : path.resolve(home,'.composer-playground','err.log')
        });

        // console.log('Start server');
        // forever.startServer(child);
        // console.log('stop server');
      }

  static stop(argv){


      var eventEmitter = forever.stopAll (true);
      eventEmitter.on('stopAll', (evt) => {
        console.log(evt);
        process.exit(0);


      });
  }

  static list(argv){


    var eventEmitter = forever.list (true, (evt) => {
      console.log(evt);
    });


  }

}

module.exports = Monitor;
