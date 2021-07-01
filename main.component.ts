import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  music={
    musicId:'1',
    musicName:'Faded',
    musicGenre:'Pop',
    musicImage:'../../assets/faded.jpg',
    musicFile:'../../assets/alan walker fade ncs release - [Free Music Downloads].mp3',
    musicSinger:'Alan Walker'
  }

  colors=["red","green","yellow"]

  audio: any= new Audio();
  play()
    {
        this.audio.src = this.music.musicFile;
        this.audio.load();
        this.audio.play();
    }
    stop()
    {
        this.audio.load();
        this.audio.stop();
    }

  constructor() { }

  ngOnInit(): void {
  }

}
