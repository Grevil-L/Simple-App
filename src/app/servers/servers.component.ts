import {Component, OnInit} from '@angular/core';
// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-servers', //tag or element selector
  // selector: '[app-servers]',//attribute selector
  // selector: '.app-servers', //class selector
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'testServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 6000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'New Server was created with name ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
