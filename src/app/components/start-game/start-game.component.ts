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
  private angle = 0;
  private spawner = 0;
  private speed = 20;
  private mirror = true;
  private slope = true;
  private sticks = true;

  constructor() {
  }

  startWebsocket() {
    this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket', 52300);

    // unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
    this.socket.emit('connected', JSON.stringify('Ionic app'));

    this.socket.fromEvent('SetScore').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('AdjustedScore').subscribe((message: any) => {
      console.log(message.data);
});

    this.socket.fromEvent('SetScene').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('SetSpawner').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('SetAngle').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('AdjustedAngle').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('SetSpeed').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('ToggleSlope').subscribe((message: any) => {
      console.log(message.data);
    });

    this.socket.fromEvent('ToggleSticks').subscribe((message: any) => {
      console.log(message.data);
    });
  }

  startGame() {
      this.socket.emit('StartGame', JSON.stringify(this.startgame));
  }
  // 1. sending scene
  setScene() {
    this.socket.emit('SetScene', JSON.stringify(this.angle));
  }

 // 2. Sending Spawner
  setSpawner() {
    this.socket.emit('SetSpawner', JSON.stringify(this.spawner));
  }

  // 3. send angle
  setAngle() {
    this.socket.emit('SetAngle', JSON.stringify(this.angle));
  }

  // 4. set speed
  setSpeed() {
    this.socket.emit('SetSpeed', JSON.stringify(this.speed));
  }

  // 5. Toggle mirror
  toggleMirror() {
    this.socket.emit('ToggleMirror', JSON.stringify(this.mirror));
  }

  // 6. Toggle slope
  toggleSlope() {
    this.socket.emit('ToggleSlope', JSON.stringify(this.slope));
  }

  // 7. Toggle sticks
  toggleSticks() {
    this.socket.emit('ToggleSticks', JSON.stringify(this.sticks));
  }

  // Stop websocket
  stopWebsocket() {
    this.socket.disconnect();
  }

  ngOnInit(): void {
  }
}
