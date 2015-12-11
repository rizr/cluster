#!/usr/bin/env bash
apt-get install nodejs -y
ln -s /usr/bin/nodejs /usr/bin/node
apt-get install npm -y
npm install -g bower
npm install -g http-server
bower install
gulp
http-server ./ -p 3000
