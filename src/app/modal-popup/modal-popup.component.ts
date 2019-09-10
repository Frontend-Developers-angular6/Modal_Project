import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
  display="none";
  constructor() { }

  ngOnInit() {
  }
  openModal(){
  this.display='block';
  }
 
  onCloseHandled(){
  this.display='none';
  }
}
