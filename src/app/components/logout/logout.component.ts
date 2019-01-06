import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(public _cs: ChatService) {}

  cerrars() {
      this._cs.logout();
    }

  ngOnInit() {
  }

}
