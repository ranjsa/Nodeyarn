const cp = require('child_process');
const chalk = require('chalk');
const success = chalk.bold.green;
const Listr = require('listr');
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

const tasks = new Listr([
    {
        title: info('Install package'),
        task: () => {try {
            const installPackg = cp.execSync("echo y|sud apt-get install apt-transport-https ca-certificates curl software-properties-common", exec_options);
            installPackg.toString();
        } catch (err) {
            console.log(error(err));
        }}
    },
    // {
    //     title: 'Install package dependencies with npm',
    //     skip: ctx => ctx.yarn !== false && 'Dependencies already installed with Yarn',
    //     task: (ctx, task) => {
    //         task.output = 'Installing dependencies...';

    //         return execa('npm', ['install'])
    //     }
    // }
]);

tasks.run().catch(err => {
    console.error(err);
});