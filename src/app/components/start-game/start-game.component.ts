import {Component, Input, OnInit} from '@angular/core';
import {SocketService} from '../../services/SocketService';
import {Message} from '../../models/message';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {

    private socket: SocketService;

    @Input()
    private game: number;

    constructor(socket: SocketService) {
        this.socket = socket;
    }

    ngOnInit(): void {
    }
}
