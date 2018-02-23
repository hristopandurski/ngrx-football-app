import { Component, OnInit, HostBinding } from '@angular/core';
import { slideFromRight } from '../../animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [slideFromRight()]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
