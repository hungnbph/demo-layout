import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from '../json/jsonMenu';
import { ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'layout-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})

export class SidebarLeftComponent implements OnInit {
  @Output() clickOutside = new EventEmitter<void>();
  toggle = false;
  data: Array<any> = [];
  parent2: any;
  constructor(private elm: ElementRef, private route: Router) {
    this.data = data;
  }
  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elm.nativeElement.contains(target);
    if (!clickedInside) {
      if (this.toggle === true) {
        this.clickOutside.emit();
        this.data.forEach((envent: any) => {
          envent.show = false;
        });
      }
    }
  }

  goPlace(item: any) {
    if (!item.childrens) {
      this.route.navigate(['/', item.router]);
      return;
    }
  }

  RouterShowSidebar(childrens1: any) {
    if (!childrens1.childrens2) {
      this.route.navigate(['/', childrens1.router]);
    }
    return;
  }
  RouterShowSidebarThree(childrens3) {
    if (!childrens3.childrens2) {
      this.route.navigate(['/', childrens3.router]);
      return;
    }
  }

  clickShowSidebarCap1(item: any, parent: Array<any>): void {
    if (!item.childrens) {
      parent.forEach((event: any) => {
        event.hiden = false;
        event.show = false;
        if (event.childrens) {
          event.childrens.forEach((childrens: any) => {
            childrens.show = false;
            if (childrens.childrens) {
              childrens.childrens.forEach((item: any) => {
                item.hiden = false;
              });
            }
          })
        }
      }
      );
      item.hiden = true;
    }
    if (item.show) {
      item.show = false;
      item.childrens.forEach((event: any) => {
        event.show = false;
      });
    }
    else if (!item.show) {
      parent.forEach((even: any) => {
        even.show = false;
        if (even.childrens) {
          even.childrens.forEach((childrens: any) => {
            childrens.show = false;
          });
        }
      });
      item.show = true;
    }
  }

  clickShowSidebarCap2(childrens1: any, parent: Array<any>, parent2: Array<any>) {
    if (!childrens1.childrens2) {
      parent2.forEach((event: any) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((childrens: any) => {
            childrens.hiden = false;
            if (childrens.childrens2) {
              childrens.childrens2.forEach((childrens2: any) => {
                childrens2.hiden = false;
              });
            }
          });
        }
      }
      );
      childrens1.hiden = true;
    }

    if (childrens1.show) {
      childrens1.show = false;
    }
    else if (!childrens1.show) {
      parent.forEach((event: any) => {
        event.show = false;
      })
      childrens1.show = true;
    }
  }
  toggle1() {
    if (this.toggle === false) {
      this.data.forEach((event: any) => {
        event.show = false;
      });
      this.toggle = true;
    } else if (this.toggle === true) {
      this.data.forEach((event: any) => {
        event.show = false;
      })
      this.toggle = false;
    }
  }
  clicksidebarcap3(childrens3: any, parent: Array<any>, parent2: Array<any>, parent3) {
    if (!childrens3.childrens2) {
      parent3.forEach((event: any) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((children: any) => {
            children.hiden = false;
            if (children.childrens2) {
              children.childrens2.forEach((item: any) => {
                item.hiden = false;
              });
            }
          });
        }
      }
      );
      childrens3.hiden = true;
      if (childrens3.hiden) {
        parent2.forEach((envent: any) => {
          envent.hiden = false;
        });
      }
    }
  }


  ngOnInit() {
  }

}
function viewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

