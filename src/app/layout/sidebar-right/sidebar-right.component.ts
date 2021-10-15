import { Component, OnInit } from '@angular/core';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mo-layout-sidebar_right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
  @Output() clickOutside = new EventEmitter<void>();
  hien = false;
  hienNoitify = false;
  api: Array<any> = [];
  constructor(private elm: ElementRef) {
    this.api = [
      {
        'id': 1,
        'icon': 'mo-icn-tooltips',
        'show': false
      },
      {
        'id': 2,
        'icon': 'mo-icn-setting',
        'show': false
      },
      {
        'id': 3,
        'icon': 'mo-icn-Web-view',
        'show': false
      }
    ];
  }
  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elm.nativeElement.contains(target);
    if (!clickedInside) {
      if (this.hien === true || this.hienNoitify === true) {
        this.clickOutside.emit();
        this.hien = false;
        this.hienNoitify = false;
      }
    }
  }

  logout() {
    if (this.hien === false || this.hienNoitify === true) {
      this.hien = true;
      this.hienNoitify = false;
    } else {
      this.hien = false;
    }
    console.log(this.hien);
  }

  noitify() {
    if (this.hien === true) {
      this.hien = false;
      this.hienNoitify = true;
      return;
    }
    if (this.hienNoitify === false) {
      this.hienNoitify = true;
    } else {
      this.hienNoitify = false;
    }
  }


  ngOnInit() {
  }

}
