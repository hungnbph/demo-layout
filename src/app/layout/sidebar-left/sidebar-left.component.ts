import { routes } from './../layout.routing.module';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from '../json/jsonMenu';
import { Location } from '@angular/common';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
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
  constructor(location: Location, private elm: ElementRef, private route: Router) {
    this.data = data;

    this.route.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const filterrouter = this.data.filter((item: any) => {
          if (`/${item.router}` === event.url) {
            item.hiden = true;
            return;
          }
          this.data.filter((childrens: any) => {
            if (childrens.childrens) {
              childrens.childrens.filter((childrens1: any) => {
                if (`/${childrens1.router}` === event.url) {
                  childrens1.hiden = true;
                  childrens.hiden = true;
                  return;
                }
                console.log('cấp 3');
              });
            }
          });
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
          if (envent.childrens) {
            envent.childrens.forEach((item: any) => {
              if (item.hiden) {
                envent.hiden = true;
              }
            });
          }
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
        if (items.childrens) {
          items.childrens.forEach((childrens1: any) => {
            childrens1.show = false;
            childrens1.hiden = false;
            if (childrens1.childrens2) {
              childrens1.childrens2.forEach((childrens: any) => {
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
      });
      return;
    }
    if (!item.show) {
      parent.forEach((even: any) => {
        even.show = false;
        if (even.childrens) {
          even.childrens.forEach((childrens: any) => {
            childrens.show = false;
            if (childrens.hiden) {
              parent.forEach((items: any) => {
                if (items.childrens) {
                  items.childrens.forEach((childrens1: any) => {
                    if (childrens1.hiden) {
                      items.hiden = true;
                    }
                  });
                }
              });
            }
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
      childrens1.childrens2.forEach((event: any) => {
        event.show = false;
        if (event.hiden) {
          childrens1.hiden = true;
        }
      });
      return;
    }
    if (!childrens1.show) {
      parent.forEach((event: any) => {
        event.show = false;
        if (event.childrens2) {
          parent.forEach((childrens: any) => {
            if (childrens.childrens2) {
              childrens.childrens2.forEach((childrens2: any) => {
                if (childrens2.hiden) {
                  childrens.hiden = true;
                }
              });
            }
          });
        }
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

  paddingTopSidebar(event) {
    if (this.toggle === true) {
      let offsetTop = 0;
      let el = event.srcElement;
      while (el) {
        offsetTop += el.offsetTop;
        el = el.parentElement;
      }
      this.addStay = offsetTop - 56;
      return { offsetTop: offsetTop };
    }
  }



  ngOnInit() {
  }

}


