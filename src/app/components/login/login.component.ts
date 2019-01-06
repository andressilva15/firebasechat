import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


  export class LoginComponent  implements OnInit {

    constructor( public _cs: ChatService)  { }

    ingresarg(proveedor: string) {
      console.log(proveedor);
      this._cs.loginG();
    }
    ingresarf(proveedor: string) {
      console.log(proveedor);
      this._cs.loginFb();
    }
    ngOnInit() {
    }

  }
