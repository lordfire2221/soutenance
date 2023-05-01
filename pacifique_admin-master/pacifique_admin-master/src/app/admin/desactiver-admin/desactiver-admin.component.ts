import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desactiver-admin',
  templateUrl: './desactiver-admin.component.html',
  styleUrls: ['./desactiver-admin.component.scss']
})
export class DesactiverAdminComponent implements OnInit {
  sidebarVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
