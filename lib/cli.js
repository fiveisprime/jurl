var exec = require('child_process').exec;

require('colors');

module.exports = function (program, util) {

  program.command('post <url> <data>')
    .description('make a POST request to the specified url with the specified data')
    .action(function (url, data) {
      if (util.hasCurl()) {
        var cmd = util.format(
          'curl -i -X POST -H "Content-Type: application/json" -d %s %s',
          data,
          url
        );
        exec(cmd, function (err, stdout, stderr) {
          if (err) {
            return console.log(stderr.red);
          }

          console.log(stdout);
        });
      }
    });
};
