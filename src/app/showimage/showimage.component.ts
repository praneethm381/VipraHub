import { Component, OnInit, Inject } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModelsService } from '../models.service';
import { FilesService } from '../files.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-image',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowImageComponent implements OnInit {

  private files = [];
  public selectedId: any;
  public modelname: any;
  public imageSource: any;
  public loading = false;

  constructor(private modelsService: ModelsService, private filesService: FilesService, private sanitizer: DomSanitizer) {}

  ngOnInit() {

  }

  showImage() {
    console.log('inside show image');
    this.loading = true;
    this.modelsService.getModelsBasedOnModelName(this.modelname).subscribe(response => {
      if (response.length === 0) {
        this.loading = false;
        alert('Files are not found for this model name.');
      }
      response.map((model) => {
        this.filesService.getFileBasedOnFileReferenceId(model.fileReferenceID).subscribe(response => {
          response.map((file) => {
            if (file.contentType === 'image/jpeg') {
              this.filesService.getChunkBasedOnFileId(file._id).subscribe(response => {
                console.log(response);
                const urlCreator = window.URL;
                this.imageSource = this.sanitizer.bypassSecurityTrustUrl(
                  urlCreator.createObjectURL(response));
                this.loading = false;
              });
            }
          });
        });
      });
    });
  }

  // showAllFiles(){
  //   console.log("inside files show")
  //   this.filesService.showFileNames().subscribe(response => {
  //     (response: string) => {
  //       let res = JSON.parse(response)
  //       for (let i = 0; i < res.json().length; i++) {
  //         this.files[i] = {
  //           id: res.json()[i].id,
  //           filename: res.json()[i].filename,
  //           contentType: res.json()[i].contentType
  //         };
  //       }
  //     }
  //   });
  // }
}
