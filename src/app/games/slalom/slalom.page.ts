import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slalom',
  templateUrl: './slalom.page.html',
  styleUrls: ['../game.scss', './slalom.page.scss'],
})
export class SlalomPage implements OnInit {

  public currentTab = 'description';

  constructor() {
  }

  ngOnInit(): void {
  }
}
