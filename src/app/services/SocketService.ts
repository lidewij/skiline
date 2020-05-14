import {Socket} from 'ngx-socket-io';

export class SocketService extends Socket {

    constructor(url: string, port: number) {
        super({url: url + ':' + port, options: {}});
    }

}
