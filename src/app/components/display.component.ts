import { Component, OnInit, Input } from '@angular/core';
import { DETAIL } from '../models';

// imported Input
// import DETAIL

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // i added input
  @Input()
  display: DETAIL[] = [];

  // end

  sharable=false;

  ngOnInit () {
    this.sharable = !! navigator['share'];
  }

  shareNow() {
      navigator['share']({
          title: 'Web Fundamentals',
          text: 'Check out Web Fundamentals — it rocks!',
          url: 'https://developers.google.com/web',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
  }


  constructor() { }

  ngOnInit() {
  }

}
