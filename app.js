const ora = require('ora');
const cp = require('child_process');
const chalk = require('chalk');
const success = chalk.bold.green;
const info = chalk.bold.blue;
//const error = chalk.bold.red;
const exec_options = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: "SIGTERM"
};


const spinner = ora(info("Install packages to allow apt to use a repository over HTTPS")).start();
// Install packages to allow apt to use a repository over HTTPS
//console.log();
const installPackg = cp.execSync("echo y|sudo apt-get install apt-transport-https ca-certificates curl software-properties-common", exec_options);
installPackg.toString();
//console.log(installPackg.toString());
spinner.succeed(info("Install packages to allow apt to use a repository over HTTPS"));
console.log("✔️" + success(" Done!"));
