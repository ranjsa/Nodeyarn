#!/bin/bash
sudo apt update
echo Y|sudo apt install nodejs
echo Y|sudo apt install npm
git clone https://github.com/ranjsa/Node_scripts.git
cd Node_scripts
node app.js