import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump',
  templateUrl: './jump.page.html',
  styleUrls: ['../game.scss', './jump.page.scss'],
})
export class JumpPage implements OnInit {

  private gameNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }
}
