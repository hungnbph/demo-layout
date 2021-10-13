import { routes } from './../layout.routing.module';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from '../json/jsonMenu';
import { Location } from '@angular/common';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'layout-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})

export class SidebarLeftComponent implements OnInit {
  @Output() clickOutside = new EventEmitter<void>();
  @ViewChild('addStyle') addStyle: ElementRef;
  @ViewChild('addStyleInElement') addStyleInElement: ElementRef;
  toggle = false;
  addStay = 0;
  data: Array<any> = [];
  parent2: any;
  routet: string;
  constructor(location: Location, private elm: ElementRef, private route: Router,) {
    this.data = data;
    // route.events.subscribe((val) => {
    //   if (location.path() !== '') {
    //     this.routet = location.path();
    //     console.log(this.routet);
    //     var filterRoutes = this.data.filter(item => '/' + item.router === this.routet);
    //     console.log(filterRoutes);

    //   } i {
    //     this.routet = 'home'
    //   }
    // });

    this.route.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        let filterrouter = this.data.filter(item => '/' + item.router === event.url);
        filterrouter.forEach((event: any) => {
          event.hiden = true;
          console.log(event);
        });

      });
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

  RouterShowSidebar(childrens1: any, item: any) {
    if (!childrens1.childrens2) {
      this.route.navigate([`${childrens1.router}`]);
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
      parent.forEach((items: any) => {
        items.hiden = false;
        items.show = false;
        if (item.childrens) {
          item.childrens.forEach((childrens: any) => {
            childrens.show = false;
            if (childrens.childrens) {
              childrens.childrens.forEach((childrens: any) => {
                childrens.hiden = false;
              });
            }
          });
        }
      });
      item.hiden = true;
      return;
    }
    if (item.show) {
      item.show = false;
      item.childrens.forEach((event: any) => {
        event.show = false;
        if (event.hiden) {
          item.hiden = true;
        }
        if (event.childrens2) {
          event.childrens2.forEach((childrens2: any) => {
            if (childrens2.show) {
              if (childrens2.hiden) {
                event.hiden = true;
              }
            }

          });
        }
      });
      return;
    }
    if (!item.show) {
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
      return;
    }
    if (childrens1.show) {
      childrens1.show = false;
      return;
    }
    if (!childrens1.show) {
      parent.forEach((event: any) => {
        event.show = false;
      });
      childrens1.show = true;
    }
  }


  toggle1() {
    if (this.toggle === false) {
      this.data.forEach((event: any) => {
        event.show = false;
      });
      this.toggle = true;
      return;
    } if (this.toggle === true) {
      this.data.forEach((event: any) => {
        event.show = false;
      });
      this.toggle = false;
    }
  }

  clicksidebarcap3(childrens3: any, parent: Array<any>, parent2: Array<any>, parent3) {
    if (!childrens3.childrens) {
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
      return;
    }

  }

  clickAddStyle(event) {
    if (this.toggle === true) {
      let offsetTop = 0;
      let el = event.srcElement;

      while (el) {
        offsetTop += el.offsetTop;
        el = el.parentElement;
      }
      this.addStay = offsetTop - 56;
      console.log(offsetTop)
      return { offsetTop: offsetTop };
    }
  }



  ngOnInit() {
  }

}


