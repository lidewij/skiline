import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freestyle',
  templateUrl: './freestyle.page.html',
  styleUrls: ['../game.scss', './freestyle.page.scss'],
})
export class FreestylePage implements OnInit {

  private gameNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }
}
