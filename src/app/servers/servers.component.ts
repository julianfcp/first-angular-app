import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  reset = false;

  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'New server was created! ';
  }
  onUpdateServerName(event: any) {
    //console.log(event);
    // Casting target value to serverName
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onEnableReset() {
    if(this.userName != '') {
      this.reset = true;
    }else{
      this.reset = false;
    }
  }
  onResetUserName(){
    this.userName = '';
    this.reset = false;
  }

}
