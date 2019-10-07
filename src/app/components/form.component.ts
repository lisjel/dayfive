import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DETAIL } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output () onNewENTRY = new EventEmitter<DETAIL>();

  // processFile(imageInput: any) {
    
  // }

  processForm(f: NgForm) {
    const values = f.value;
    console.log('You have entered: ', values)

    const entry: DETAIL = {
      albumName: values.albumname,
      albumArtist: values.albumartist,
      rating: values.rating,
      albumImage: values.url
    }

    if (! entry.rating) {
      entry.rating = 5;
    }

    if (! entry.albumImage) {
      entry.albumImage = './assets/emptyalbum.png';
    }


    f.resetForm();
    this.onNewENTRY.next(entry);
  }

  constructor() { }

  ngOnInit() {
  }


}
