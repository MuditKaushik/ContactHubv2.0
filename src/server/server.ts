import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import * as bodyParser from 'body-parser'

module Server {
    let app = express(),
        router = express.Router(),
        serverConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/server.config.json'), 'utf8'));

    app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
    app.use('/', express.static(path.join(__dirname, '../../')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set('port', serverConfig.server.app_port);

    export class ServerConfig {
        static _instance: ServerConfig;
        constructor() {
            this.init_server();
        }
        static CreateInstance(): ServerConfig {
            if (this._instance == null || this._instance == undefined)
                this._instance = new ServerConfig();
            return this._instance;
        }
        init_server(): void {
            app.get('*', (req, res) => {
                res.sendFile(path.join(__dirname, '../../index.html'));
            });
            app.listen(app.get('port'), () => {
                console.log(`server is listening at port ${app.get('port')}.`);
            });
        }
    }
}

Server.ServerConfig.CreateInstance();