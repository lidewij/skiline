import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/SocketService';
import {Message} from '../../models/message';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {

  private socket: SocketService;

  private angle = 30;

  constructor() {
  }

  startWebsocket() {
    this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket', 52300);

    // unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
    this.socket.emit('connected', JSON.stringify('Ionic app'));

    this.socket.fromEvent('SetScene').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('SetSpawner').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('SetAngle').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('AdjustedAngle').subscribe((message) => {
      console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('SetSpeed').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('ToggleSlope').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });

    this.socket.fromEvent('ToggleSticks').subscribe((message) => {
      // console.log(JSON.stringify(message.data));
      // console.dir(JSON.stringify(message.data));
    });
  }

  // 1. sending scene
  setScene() {
    this.socket.emit('SetScene', JSON.stringify(this.angle));
  }

 // 2. Sending Spawner
  setSpawner() {
    this.socket.emit('SetSpawner', JSON.stringify(this.angle));
  }

  // 3. send angle
  setAngle() {
    this.socket.emit('SetAngle', JSON.stringify(this.angle));
  }

  // 4. set speed
  setSpeed() {
    this.socket.emit('SetSpeed', JSON.stringify(this.angle));
  }

  // 5. Toggle mirror
  toggleMirror() {
    this.socket.emit('ToggleMirror', JSON.stringify(this.angle));
  }

  // 6. Toggle slope
  toggleSlope() {
    this.socket.emit('ToggleSlope', JSON.stringify(this.angle));
  }

  // 7. Toggle sticks
  toggleSticks() {
    this.socket.emit('ToggleSticks', JSON.stringify(this.angle));
  }

  // Stop websocket
  stopWebsocket() {
    this.socket.disconnect();
  }

  // // send highscore
  // sendHighscore() {
  //   const message: Message = new Message('highscore', 300);
  //   this.socket.emit('event', message);
  // }
  // // send another
  // sendData() {
  //   const message: Message = new Message('angle', 20);
  //   this.socket.emit('sendData', message);
  // }

  ngOnInit(): void {
  }
}
