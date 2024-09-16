import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  segment = 'chats';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log('Segment changed to', event);
  }

}
