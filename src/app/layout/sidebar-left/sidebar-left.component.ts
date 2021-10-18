import { data } from './../json/jsonMenu';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Idata } from '../json/jsonMenu';
import { ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mo-layout-sidebar_left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})


export class LayoutSidebarLeftComponent implements OnInit {
  data: Array<Idata>;
  toggle: boolean;
  addStyleCss: number;
  routet: string;

  @Output() moclickOutside = new EventEmitter<void>();

  @ViewChild('addStyle') addStyle: ElementRef;


  constructor(private elementREf: ElementRef, private route: Router) {
    this.data = data;
    this.toggle = false;
    this.addStyleCss = 0;

    this.route.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      this.data.filter((item) => {
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


  ngOnInit() {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementREf.nativeElement.contains(target);
    if (!clickedInside) {
      if (this.toggle === true) {
        this.moclickOutside.emit();
        this.data.forEach((event) => {
          event.show = false;
        });
      }
    }
  }

  routerLinkUrlSidebarLv1(item: Idata) {
    if (!item.childrens) {
      this.route.navigate(['/', item.router]);
    }
  }

  routerLinkUrlSidebarLv2(childrens1: Idata) {
    if (!childrens1.childrens) {
      this.route.navigate([`/${childrens1.router}`]);
    }
  }


  routerLinkUrlSidebarLv3(childrens3: Idata) {
    if (!childrens3.childrens) {
      this.route.navigate([`/${childrens3.router}`]);

    }
  }

  handlerClickShowSidebar1(item: Idata, parent: any[]): void {
    if (!item.childrens) {
      parent.forEach((items: { hiden: boolean, show: boolean, childrens: any[] }) => {
        items.hiden = false;
        items.show = false;
        if (items.childrens) {
          items.childrens.forEach((childrens1: any) => {
            childrens1.show = false;
            childrens1.hiden = false;
            if (childrens1.childrens2) {
              childrens1.childrens2.forEach((childrens: Idata) => {
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
      parent.forEach((event: { show: boolean; childrens: any[]; }) => {
        event.show = false;
        if (event.childrens) {
          event.childrens.forEach((childrens: { show: boolean; }) => {
            childrens.show = false;
          });
        }
      });
      item.show = true;
    }
  }

  handlerClickShowSidebar2(childrens1: { childrens: any[]; hiden: boolean; show: boolean; }, parent: any[], parent2: any[]) {
    if (!childrens1.childrens) {
      parent2.forEach((event: { hiden: boolean; childrens: any[]; }) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((childrens: { hiden: boolean; childrens: any[]; }) => {
            childrens.hiden = false;
            if (childrens.childrens) {
              childrens.childrens.forEach((childrens2: { hiden: boolean; }) => {
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
      childrens1.childrens.forEach((event: { show: boolean; }) => {
        event.show = false;
      });
      return;
    }
    if (!childrens1.show) {
      parent.forEach((event: { show: boolean; }) => {
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

  handlerClicksidebar3(childrens3: { childrens: any; hiden: boolean; }, parent3: any[]) {
    if (!childrens3.childrens) {
      parent3.forEach((event: { hiden: boolean; childrens: any[]; }) => {
        event.hiden = false;
        if (event.childrens) {
          event.childrens.forEach((children: { hiden: boolean; childrens: any[]; }) => {
            children.hiden = false;
            if (children.childrens) {
              children.childrens.forEach((item: { hiden: boolean; }) => {
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

  paddingTopSidebar(event: { srcElement: any; }) {
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

}


