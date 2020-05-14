import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss'],
})
export class SliderComponentComponent implements OnInit {

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}

  ngOnInit(): void {
  }

}
