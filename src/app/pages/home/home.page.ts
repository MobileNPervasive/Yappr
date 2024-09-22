import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  segment = 'chats';
  open_new_chat = false;
  users = [
    {id: 1, name: 'Diggy', photo: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png'},
    {id: 2, name: 'JustInBeber', photo: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png'}, 
  ];

  chatRooms = [
    {id: 1, name: 'Diggy', photo: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png'},
    {id: 2, name: 'JustInBeber', photo: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png'},
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('HomePage initialized');
  }

  logout() {
    this.popover.dismiss();
  }

  segmentChanged(event: any) {
    console.log('Segment changed to', event);
  }

  newChat() {
    this.open_new_chat = true;
  }

  cancel() {

    this.open_new_chat = false;
  }

  onWillDismiss(event: any) {}

  startChat(item) {}

  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }
}
