import {Component, OnInit} from '@angular/core';

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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 6000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'New Server was created';
  }

}
