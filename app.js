const { Server } = require('socket.io');

const http = require('http');
const express = require('express');

const config = require('./config.json');

this.app = express();
this.app.use(express.json());
this.app.set('view engine', 'ejs');
this.app.use(express.static('style'));
this.app.use(express.urlencoded({ extended: false }));

this.server = http.createServer(this.app);
this.io = new Server(this.server);

this.app.get('/', (req, res) => res.render('index.ejs'));

setInterval(() => {
    this.io.emit('uptime', {
        number: Math.round(Math.random() * (100 - 1) + 1)
    });
}, 1000);

this.server.listen(config.port ?? 8080, () => console.log(`Express server ready on the port ${config.port ?? 8080}`));