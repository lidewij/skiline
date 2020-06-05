import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-setup1',
  templateUrl: './setup1.page.html',
  styleUrls: ['./setup1.page.scss'],
})
export class Setup1Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  nextButton = 'Next';

  @ViewChild('slider', { static: true })
  slides: IonSlides;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    this.slides.update();
  }

  next() {

    this.slides.isEnd().then((end) => {
      if (end) {
        this.modalCtrl.dismiss();
      }
      if (!end) {
        this.slides.slideNext();
      }
    });

  }

  change() {
    this.nextButton = 'Next';

    this.slides.isEnd().then((end) => {
      if (end) {
        this.nextButton = 'Start';
      }
    });
  }
}
