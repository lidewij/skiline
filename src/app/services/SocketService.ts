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
    public angle = 0;
    public spawner = 0;
    public speed = 20;
    public mirror = true;
    public slope = true;
    public sticks = true;
    // constructor(config: SocketServiceConfig) {
    //     super({url: config.url + ':' + config.port, options: {}});
    //     this.start();
    // }

    constructor() {
        super({url: 'ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket' + ':' + 52300, options: {}});
        this.start();
    }

    private start() {
        // unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
        this.emit('connected', JSON.stringify('Ionic app'));
        this.registerEvents();
    }

    private registerEvents() {
        this.fromEvent('SetScore').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('AdjustedScore').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('SetScene').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('SetSpawner').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('SetAngle').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('AdjustedAngle').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('SetSpeed').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('ToggleSlope').subscribe((message: any) => {
            console.log(message.data);
        });

        this.fromEvent('ToggleSticks').subscribe((message: any) => {
            console.log(message.data);
        });
    }

    setScene() {
        this.emit('SetScene', JSON.stringify(this.angle));
    }

    // 2. Sending Spawner
    setSpawner(game: number) {
        this.emit('SetSpawner', JSON.stringify(game));
    }

    // 3. send angle
    setAngle() {
        this.emit('SetAngle', JSON.stringify(this.angle));
    }

    // 4. set speed
    setSpeed() {
        this.emit('SetSpeed', JSON.stringify(this.speed));
    }

    // 5. Toggle mirror
    toggleMirror() {
        this.emit('ToggleMirror', JSON.stringify(this.mirror));
    }

    // 6. Toggle slope
    toggleSlope() {
        this.emit('ToggleSlope', JSON.stringify(this.slope));
    }

    // 7. Toggle sticks
    toggleSticks() {
        this.emit('ToggleSticks', JSON.stringify(this.sticks));
    }

    startGame() {
        this.emit('StartGame', 'startGame');
    }

    reset() {
        this.angle = 0;
        this.spawner = 0;
        this.speed = 20;
        this.mirror = true;
        this.slope = true;
        this.sticks = true;
    }
}
