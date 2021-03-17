const ora = require('ora');

var emoji = require('node-emoji')
console.log(emoji.get("rocket"));

const spinner = ora("taking off");
spinner.start();
console.log(emoji.get("rocket"));
console.log(emoji.get("rocket"));
console.log(emoji.get("rocket"));
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
    spinner.succeed("on Moon");
}, 1000);
