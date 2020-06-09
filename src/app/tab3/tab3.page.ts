import { Component } from '@angular/core';
import {SocketService} from '../services/SocketService';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private socket: SocketService;

  constructor(socket: SocketService) {
    this.socket = socket;

  }

  startWebsocket() {
    //this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket', 52300);

    // unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
    this.socket.emit('connected', JSON.stringify('Ionic app'));


  }
  // 1. sending scene


  // Stop websocket
  stopWebsocket() {
    this.socket.disconnect();
  }
}

