import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarnew',
  templateUrl: './sidebarnew.component.html',
  styleUrls: ['./sidebarnew.component.sass']
})
export class SidebarnewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isSidebarClosed: boolean = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

}
