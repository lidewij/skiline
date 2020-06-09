import {Socket} from 'ngx-socket-io';
import {Injectable} from '@angular/core';
import {SocketServiceConfig} from '../models/SocketServiceConfig';

@Injectable({
    providedIn: 'root',
})
export class SocketService extends Socket {

    // constructor(url: string, port: number) {
    //     super({url: url + ':' + port, options: {}});
    // }
    private socket: SocketService;

    // constructor(config: SocketServiceConfig) {
    //     super({url: config.url + ':' + config.port, options: {}});
    //     this.start();
    // }

    constructor() {
        super({url: "ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket" + ':' + 52300, options: {}});
        console.log(123);
        this.start();
    }

    start() {
        // unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
        this.emit('connected', JSON.stringify('Ionic app'));
        console.log(123);
    }
}
