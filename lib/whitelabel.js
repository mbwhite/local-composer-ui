
const faker = require('faker');
/**

 */
class Whitelabel {

  /**
    * Command process for deploy command
    * @param {string} argv argument list from composer command
    * @return {Promise} promise when command complete
    */
    static start(argv) {
      var interval = 2000;//argv.i;

      setInterval(()=> {
        this.quote();
      },interval);
    }

    /**
      * Command process for deploy command
      * @param {string} argv argument list from composer command
      * @return {Promise} promise when command complete
      */
      static run(argv) {
        var interval = argv.i;

        setInterval(()=> {
          this.quote();
        },interval);
      }

    static quote(){
      var str = [faker.name.findName(),faker.internet.email()];
      console.log(str.join('\t--> '));
    }

    static stop(argv){
      console.log('...stopping');
    }

  }


module.exports = Whitelabel;
