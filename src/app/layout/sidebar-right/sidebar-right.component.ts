import { Component, OnInit } from '@angular/core';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mo-layout-sidebar_right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class LayoutSidebarRightComponent implements OnInit {

  hidden = false;
  hiddenNoitify = false;
  api: Array<any> = [];


  @Output() clickOutside = new EventEmitter<void>();
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
      if (this.hidden === true || this.hiddenNoitify === true) {
        this.clickOutside.emit();
        this.hidden = false;
        this.hiddenNoitify = false;
      }
    }
  }

  handlerClicklogout() {
    if (this.hidden === false || this.hiddenNoitify === true) {
      this.hidden = true;
      this.hiddenNoitify = false;
    } else {
      this.hidden = false;
    }
    console.log(this.hidden);
  }

  handlerClicknoitify() {
    if (this.hidden === true) {
      this.hidden = false;
      this.hiddenNoitify = true;
      return;
    }
    if (this.hiddenNoitify === false) {
      this.hiddenNoitify = true;
    } else {
      this.hiddenNoitify = false;
    }
  }


  ngOnInit() {
  }

}
