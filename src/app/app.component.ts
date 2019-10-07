import { Component } from '@angular/core';
import { DETAIL } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // change title later
  title = 'day5vinyl';

// for sending list to display
  display: DETAIL[] = [ ]

  addToList($event: DETAIL) {
    // event emitter for form to app component
    console.log('Album List ', $event)

    // to send from app component to display component
    const newList = $event
    
    this.display.push(newList);
    
    this.display.sort(function(a:DETAIL, b:DETAIL) {
  
      if (a.albumArtist > b.albumArtist) return 1;
      if (a.albumArtist < b.albumArtist) return -1;
      if (a.albumArtist == b.albumArtist) return 0;
    });


    
    

  }
}
