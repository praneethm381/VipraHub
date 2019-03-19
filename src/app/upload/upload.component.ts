import { Component, OnInit, Inject } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-upload-download',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadDownloadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadDownloadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  private files = [];
  private url = 'http://localhost:4000/uploadToMongo';
  // private url = 'http://localhost:4000/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
  }
}
