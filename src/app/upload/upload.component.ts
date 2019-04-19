import { Component, OnInit, Inject } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilesService } from '../files.service';
import { ViprahubService } from '../viprahub.service';
import { ModelsService } from '../models.service';
import { LoggedinUserInfoService } from '../services/loggedin-user-info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-download',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadDownloadComponent implements OnInit {

  private files = [];
  private url = 'http://localhost:4000/uploadToMongo/files';
  // private url = 'http://localhost:4000/upload';
  private uploader: FileUploader;
  public categories: any[];
  public allModelsFromDb: any;
  // public selectedId: any;
  public selectedcategory: any;
  public modelname: any;
  public alreadyModelNamePresent: any;
  public IsFilesUploadedSuccessfully: any = false;
  public filesArray: Array<any> = [];

  constructor(
    private filesService: FilesService,
    private modelsService: ModelsService,
    private viprahubService: ViprahubService,
    private loggedinUserInfoService: LoggedinUserInfoService,
    public dialogRef: MatDialogRef<UploadDownloadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
    this.viprahubService.getCategory().subscribe(response => {

      console.log(response);
      this.categories = response;
    });
    this.modelsService.getAllModels().subscribe(response => {
      this.allModelsFromDb = response;
    });
  }

  checkIfModelNameIsAlreadyPresent() {
    this.alreadyModelNamePresent = this.allModelsFromDb.filter((model) => model.userId === this.loggedinUserInfoService.userInfo.emailID && model.name === this.modelname).length > 0;

    if ((typeof(this.alreadyModelNamePresent) === 'undefined') || this.alreadyModelNamePresent) {
      alert('Error: Duplicate model name. Please enter another model name.');
    } else {
      this.uploader.uploadAll();

      this.uploader.onSuccessItem = (item: FileItem, response: string) => {
        const res = JSON.parse(response); // success server response
        console.log(this.selectedcategory);
        this.filesArray.push(res.file_id)
      };

      this.uploader.onCompleteAll = () => {
        this.modelsService.uploadModel({userId: this.loggedinUserInfoService.userInfo.emailID, categoryId: this.selectedcategory, name: this.modelname, fileReferenceIDs: this.filesArray})
          .subscribe((post) => {
            console.log('Upload Model created with parameters');
          });
      }
      this.IsFilesUploadedSuccessfully = true;
    }
  }
}
