const cp = require('child_process');
const chalk = require('chalk');
const ora = require('ora');
const Listr = require('listr');
const success = chalk.bold.green;
const info = chalk.bold.blue;
const error = chalk.bold.red;
const exec_options = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: "SIGTERM"
};

const spinner = ora(info("Take off Start")).start();

const tasks = new Listr([
    {
        title: info('Install package'),
        task: () => {try {
            const installPackg = cp.execSync("echo y|sudo apt-get install apt-transport-https ca-certificates curl software-properties-common", exec_options);
            installPackg.toString();
        } catch (err) {
            console.log(error(err));
        }}
    },
    {
        title: info('Installing curl and unzip'),
        task: () => {try {
            const installCurl = cp.execSync("sudo apt install curl", exec_options);
            installCurl.toString();
        } catch (err) {
            console.log(error(err));
        }}
    },
    {
        title: info("Installing fnm"),
        task: () => {try {
            const install_fnm = cp.execSync("sudo curl -fsSL https://fnm.vercel.app/install | bash");
            install_fnm.toString();
        } catch (err) {
            const ref_bash = cp.execSync("source ~/.bashrc", exec_options);
            ref_bash.toString();
            const install_fnm = cp.execSync("sudo curl -fsSL https://fnm.vercel.app/install | bash");
            install_fnm.toString();
            // console.log(error(err));
        }}
    },
    {
        title: info("Adding path"),
        task: () => {try {
            const reload_bashrc = cp.execSync(". ~/.bashrc");
            reload_bashrc.toString();
            console.log(info("Adding path"));
            const config = cp.execSync("fnm completions --shell bash", exec_options);
            config.toString();
        } catch (err) {
            console.log(error(err));
        }}
    },
    {
        title: info("Installing Node 14.16.0 LTS"),
        task: () => {try {
            const isntallNodeLTS = cp.execSync("fnm install 14.16.0", exec_options);
            isntallNodeLTS.toString();
        } catch (err) {
            console.log(error(err));
        }}
    },
]);

tasks.run().catch(err => {
    console.error(err);
});