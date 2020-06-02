import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/SocketService';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {

  private socket: SocketService;

  private angle: 12;

  constructor() {
  }

  startWebsocket() {
     //this.socket = new SocketService('http://localhost', 45678);
    // this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com/socket.io/?EIO=4&transport=websocket', 52300);
    this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com?EIO=4&transport=websocket', 52300);
    
    
    //unity:  socket.Emit("connected", JSONObject.CreateStringObject("Unity"));
    this.socket.emit('connected', JSON.stringify("Ionic app"));


    /* this.socket.on('connect', () => {
      console.log('connected');
      this.socket.emit('register', 'app');
    });
    this.socket.fromEvent('event').subscribe((message) => {
      console.log('Message received: ' + message);
    }); */
  }

  sendHello() {
    //this.socket.emit('event', 'Hello VR');

    this.socket.emit('SetAngle', JSON.stringify(this.angle));
  }

  stopWebsocket() {
    this.socket.disconnect();
  }

  ngOnInit(): void {
  }

  // startWebsocket() {
  //   this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com:80/socket.io/?EIO=4&transport=websocket', 52300);
  //   this.socket.connect();
  //   // this.socket = new SocketService('http://localhost', 45678);
  //   // this.socket.on('connect', () => {
  //   //   console.log('connected');
  //   //   // this.socket.emit('registerApp', 'app');
  //   // });
  //   // this.socket.fromEvent('event').subscribe((message) => {
  //   //   console.log('Message received: ' + message);
  //   // });
  //   this.socket.on('registerApp', (data) => {
  //     console.log('test');
  //   });
  //   // this.socket.emit('registeredApp');
  //
  //   this.socket.fromEvent('registerApp').subscribe((message) => {
  //     console.log('test' + message);
  //   });
  // }
  // sendHello() {
  //   this.socket.emit('registeredApp');
  // }
  //
  // stopWebsocket() {
  //   this.socket.disconnect();
  // }

//   ngOnInit() {
//   //   this.socket = new SocketService('ws://nodejs-ski-server.herokuapp.com:80/socket.io/?EIO=4&transport=websocket', 52300);
//   //   this.socket.connect();
//   //
//   //   this.socket.fromEvent('registerApp').subscribe( (message) => {
//   //     console.log('test' + message);
//   //   });
//   //   this.socket.emit('registeredApp', 'message' );
//   // }
// }
}
