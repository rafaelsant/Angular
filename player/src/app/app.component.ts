import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';  

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'player';
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = false;
    
  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'She looks like fun',
      link: '../assets/SheLooksLikeFun.mp3'
    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL'
    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL'
    },
  ];
}



