const ora = require('ora');
//const cp = require('child_process');
const chalk = require('chalk');
const success = chalk.bold.green;
const info = chalk.bold.blue;
const execa = require('execa');

// const error = chalk.bold.red;
// const exec_options = {
//     cwd: null,
//     env: null,
//     encoding: 'utf8',
//     timeout: 0,
//     maxBuffer: 200 * 1024,
//     killSignal: "SIGTERM"
// };


const spinner = ora(info("taking off"));
spinner.start();
// Install packages to allow apt to use a repository over HTTPS

(async () => {
    try {
	const i = await execa("echo y|sudo apt-get install apt-transport-https ca-certificates curl software-properties-common");
	console.log(i);
    } catch (err) {

    }
})();

(async () => {
    try {
	const i = await execa("sudo apt install curl");
	console.log(i);
    } catch (err) {
        
    }
})();
(async () => {
    try {
	const i = await execa("sudo curl -fsSL https://fnm.vercel.app/install | bash");
	console.log(i);
    } catch (err) {
     
    }
})();

(async () => {
    try {
	const i = await execa(". ~/.bashrc");
	console.log(i);
    } catch (err) {
        
    }
})();

(async () => {
    try {
	const i = await execa("fnm install 14.16.0");
	console.log(i);
    } catch (err) {
        
    }
})();

spinner.succeed(info("top of the world!!"));

//console.log(installPackg.toString());

//console.log("✔️" + success(" Done!"));
/*
try {
    spinner.start(info("Install packages to allow apt to use a repository over HTTPS")); //= ora(info("Install packages to allow apt to use a repository over HTTPS")).start();
    const installPackg = cp.execSync("echo y|sud apt-get install apt-transport-https ca-certificates curl software-properties-common", exec_options);
    installPackg.toString();
    spinner.prefixText = '✔️';
    spinner.succeed(success("Installed  packages to allow apt to use a repository over HTTPS"));
} catch (err) {
    spinner.fail(error("err"));
}

*/