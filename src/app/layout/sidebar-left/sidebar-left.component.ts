import { element } from 'protractor';

import { routes } from './../layout.routing.module';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from '../json/jsonMenu';
import { Idata } from '../json/jsonMenu';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mo-layout-sidebar_left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})


export class SidebarLeftComponent implements OnInit {
  data: Array<Idata>;
  @Output() clickOutside = new EventEmitter<void>();
  @ViewChild('addStyle') addStyle: ElementRef;
  toggle: boolean;
  addStyleCss: number;
  routet: string;
  constructor(private elementREf: ElementRef, private route: Router) {
    this.data = data;
    this.toggle = false;
    this.addStyleCss = 0;

    this.route.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const filterrouter = this.data.filter((item) => {
          if (`/${item.router}` === event.urlAfterRedirects) {
            item.hiden = true;
            return;
          }
          this.data.filter((childrens) => {
            if (childrens.childrens) {
              childrens.childrens.filter((childrens1) => {
                if (`/${childrens1.router}` === event.urlAfterRedirects) {
                  childrens1.hiden = true;
                  childrens.hiden = true;
                  return;
                }
              });
            }
          });

          this.data.filter((childrens1) => {
            if (childrens1.childrens) {
              childrens1.childrens.filter((childrens2) => {
                if (childrens2.childrens) {
                  childrens2.childrens.filter((items) => {
                    if (`/${items.router}` === event.urlAfterRedirects) {
                      items.hiden = true;
                      childrens2.hiden = true;
                      childrens1.hiden = true;
                      return;
                    }
                  });
                }
              });
            }

          });
        });
      });
  }



  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementREf.nativeElement.contains(target);
    if (!clickedInside) {
      if (this.toggle === true) {
        this.clickOutside.emit();
        this.data.forEach((event) => {
          event.show = false;
        });
      }
    }
  }

  routerLinkUrlSidebarLv1(item) {
    if (!item.childrens) {
      this.route.navigate(['/', item.router]);
      return;
    }
  }

  routerLinkUrlSidebarLv2(childrens1) {
    if (!childrens1.childrens) {
      this.route.navigate([`/${childrens1.router}`]);
    }
    return;
  }


  routerLinkUrlSidebarLv3(childrens3) {
    if (!childrens3.childrens) {
      this.route.navigate([`/${childrens3.router}`]);
      return;
    }
  }

  handlerClickShowSidebar1(item, parent): void {
    if (!item.childrens) {
      parent.forEach((items) => {
        items.hiden = false;
        items.show = false;
        if (items.childrens) {
          items.childrens.forEach((childrens1) => {
            childrens1.show = false;
            childrens1.hiden = false;
            if (childrens1.childrens2) {
              childrens1.childrens2.forEach((childrens) => {
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
      item.childrens.forEach((event) => {
        event.show = false;
      });
      return;
    }
    if (!item.show) {
      parent.forEach((event) => {
        event.show = false;
        if (event.childrens) {
          event.childrens.forEach((childrens) => {
            childrens.show = false;
          });
        }
      });
      item.show = true;
    }
  }

  handlerClickShowSidebar2(childrens1, parent, parent2) {
    if (!childrens1.childrens) {
      parent2.forEach((event) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((childrens) => {
            childrens.hiden = false;
            if (childrens.childrens) {
              childrens.childrens.forEach((childrens2) => {
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
      childrens1.childrens.forEach((event) => {
        event.show = false;
      });
      return;
    }
    if (!childrens1.show) {
      parent.forEach((event) => {
        event.show = false;
      });
      childrens1.show = true;
    }
  }


  handlerClickOpenSmallSidebar() {
    if (this.toggle === false) {
      this.data.forEach((event) => {
        event.show = false;
      });
      this.toggle = true;
      return;
    } if (this.toggle === true) {
      this.data.forEach((event) => {
        event.show = false;
      });
      this.toggle = false;
    }
  }

  handlerClicksidebar3(childrens3, parent3) {
    if (!childrens3.childrens) {
      parent3.forEach((event) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((children) => {
            children.hiden = false;
            if (children.childrens) {
              children.childrens.forEach((item) => {
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
      this.addStyleCss = offsetTop - 56;
      return { offsetTop: offsetTop };
    }
  }



  ngOnInit() {
  }

}


