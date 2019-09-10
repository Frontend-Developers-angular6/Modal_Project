import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

// afuConfig = {
//   multiple: false,
//   formatsAllowed: ".jpg,.png",
//   maxSize: "1",
//   uploadAPI:  {
//     url:"https://example-file-upload-api",
//     headers: {
//    "Content-Type" : "text/plain;charset=UTF-8",
//    "Authorization" : `Bearer ${token}`
//     }
//   },
//   theme: "dragNDrop",
//   hideProgressBar: true,
//   hideResetBtn: true,
//   hideSelectBtn: true,
//   replaceTexts: {
//     selectFileBtn: 'Select Files',
//     resetBtn: 'Reset',
//     uploadBtn: 'Upload',
//     dragNDropBox: 'Drag N Drop',
//     attachPinBtn: 'Attach Files...',
//     afterUploadMsg_success: 'Successfully Uploaded !',
//     afterUploadMsg_error: 'Upload Failed !'
//   };
// };


}
