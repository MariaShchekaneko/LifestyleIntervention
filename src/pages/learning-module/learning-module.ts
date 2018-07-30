import { Module } from './../../models/module';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-learning-module',
  templateUrl: 'learning-module.html',
})
export class LearningModulePage {

  module: Module;
  //videoUrl: string;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              //private youtube: YoutubeVideoPlayer
            )
    {
    this.module = this.navParams.get('module');
    }


  onLeave() {
    this.viewCtrl.dismiss();
  }

  /*playVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log('SUCCESS')},
      errorCallback: () => {console.log('ERROR')},
      orientation: 'landscape'
    };
    this.steamingMedia.playVideo(this.module.videoUrl, options);
   // this.youtube.openVideo(this.module.videoUrl);

  }
 // playVideo() {
   //this.youtube.openVideo(this.module.videoUrl);
   //this.youtube.openVideo('https://www.youtube.com/watch?v=ibP5WJOPkR');
  //}
  playVideo() {
   this.youtube.openVideo('https://youtu.be/z_aVNv_gNdM?list=RDEM5ir_mINWufd3myKxvGd8ug');
   }
*/
}
