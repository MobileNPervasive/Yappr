import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  name: string = 'Sender';
  message: string = '';
  isLoading = false;
  currentUserId = 1;
  chats = [
    {id: 1, sender: 1, message: 'Hello', time: '12:00'},
    {id: 2, sender: 2, message: 'Hi', time: '12:01'},
  ];

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {}

}
