import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
  hien = false;
  hienNoitify = false;
  api: Array<any> = [];
  constructor() {
    this.api = [
      {
        "id": 1,
        "icon": "mo-icn-tooltips",
        "show": false
      },
      {
        "id": 2,
        "icon": "mo-icn-setting",
        "show": false
      },
      {
        "id": 3,
        "icon": "mo-icn-Web-view",
        "show": false
      }
    ]
  }

  logout() {
    if (this.hien === false || this.hienNoitify === true) {
      this.hien = true;
      this.hienNoitify = false;
    } else {
      this.hien = false;
    }
    console.log(this.hien)
  }

  noitify() {
    if (this.hien === true) {
      this.hien = false
      this.hienNoitify = true;
    }
    else if (this.hienNoitify === false) {
      this.hienNoitify = true;
    } else {
      this.hienNoitify = false;
    }
  }


  ngOnInit() {
  }

}
