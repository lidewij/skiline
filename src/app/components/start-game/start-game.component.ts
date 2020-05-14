import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/SocketService';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {

  private socket: SocketService;

  constructor() {
  }

  startWebsocket() {
    this.socket = new SocketService('http://localhost', 45678);
    this.socket.on('connect', () => {
      console.log('connected');
      this.socket.emit('register', 'app');
    });
    this.socket.fromEvent('event').subscribe((message) => {
      console.log('Message received: ' + message);
    });
  }

  sendHello() {
    this.socket.emit('event', 'Hello VR');
  }

  stopWebsocket() {
    this.socket.disconnect();
  }

  ngOnInit(): void {
  }
}
