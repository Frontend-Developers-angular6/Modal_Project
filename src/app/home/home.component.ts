import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
// import { ModalPopupComponent } from './modal-popup/modal-popup.component';
// import { DialogRef, ModalComponent } from 'ngx-modialog';
// import { BsignDialogComponentContext } from './bsign.dialog.component.context';
// import {ModalManager} from 'ngb-modal';
// import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
// import{NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
display="none";  
  constructor(){}

ngOnInit() {
  }

  openModal(){
    this.display='block';
    }
   
    onCloseHandled(){
    this.display='none';
    }
}

  


  

