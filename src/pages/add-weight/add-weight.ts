import { Entry } from 'ionic-native';
import { FileError } from 'ionic-native';
import { Camera } from 'ionic-native';
import { Weight } from './../../models/weight';
import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { WeightService } from './../../services/weight.service';
import { Component } from '@angular/core';
import { File } from "ionic-native";

declare var cordova: any;

@Component({
  selector: 'page-add-weight',
  templateUrl: 'add-weight.html',
})
export class AddWeightPage {
 
  weight: Weight;
  imageUrl = '';


    constructor(
      private weightService: WeightService,
      private toastCtrl: ToastController) {
  }
    onSubmit(form: NgForm) {
      this.weightService.addWeight(form.value.date, 
                                   form.value.weight,
                                   this.imageUrl);
     form.resetForm();
     this.imageUrl = '';
     const toast = this.toastCtrl.create({
      message: 'Weight was added!',
      duration: 2500,
      position: 'middle'
    });
    toast.present();
    }
    onTakePhoto() {
      Camera.getPicture({
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true
      })
        .then(
          imageData => {
            const currentName = imageData.replace(/^.*[\\\/]/, '');
            const path = imageData.replace(/[^\/]*$/, '');
            const newFileName = new Date().getUTCMilliseconds() + '.jpg';
            File.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
              .then(
                (data: Entry) => {
                  this.imageUrl = data.nativeURL;
                  Camera.cleanup();
                  // File.removeFile(path, currentName);
                }
              )
              .catch(
                (err: FileError) => {
                  this.imageUrl = '';
                  const toast = this.toastCtrl.create({
                    message: 'Could not save the image. Please try again',
                    position: 'middle',
                    duration: 2500
                  });
                  toast.present();
                  Camera.cleanup();
                }
              );
            this.imageUrl = imageData;
          }
        )
        .catch(
          err => {
            const toast = this.toastCtrl.create({
              message: 'Could not take the image. Please try again',
              duration: 2500,
              position: 'middle'
            });
            toast.present();
          }
        );
    }
    onAddFromGallery(): void {
      let cameraOptions = {
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.FILE_URI,      
        quality: 100,
        targetWidth: 1000,
        targetHeight: 1000,
        encodingType: Camera.EncodingType.JPEG,      
        correctOrientation: true
      }
    
      Camera.getPicture(cameraOptions)
        .then(imageData => {
          this.imageUrl = imageData;
        }, 
        err => console.log(err));  
        
    };
  
  }
  