import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewChild,Renderer2, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'layout-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})

export class SidebarLeftComponent implements OnInit {
  @Output() clickOutside = new EventEmitter<void>();
  toggle = false;
  data: Array<any> = [];
  pathRouting:any;
  @ViewChild('insideElement') insideElement: ElementRef;
  parent2: any;
  constructor( private renderer: Renderer2) {
    this.renderer.listen('document', 'click',(e:any)=>{
     if(e.target !== this.insideElement.nativeElement && this.toggle==true){
         console.log('output')
     }
 });
    this.data = [
      {
        "id": 1,
        "name": "trang chủ",
        "icon": "mo-icn-Home",
        "router":"detail",
        "show": false,
        "hiden":false,
      },
      {
          "id": 2,
          "name": "cdp",
          "show": false,
          "icon": "mo-icn-personal-n-brand",
          "router":"detail",
          "hiden":false,
          "childrens": [
            {
              "key":"1",
              "name":"cdp1",
              "router":"detail",
              "show":false,

            },
            {
              "key":"2",
              "name":"cdp2",
              "router":"detail",
              "show":false,

            },
            {
              "key":"3",
              "name":"cdp3",
              "router":"detail",
              "show":false,

            },
            {
              "key":"4",
              "name":"cdp4",
              "router":"detail",
              "show":false,

            }
          ]
      },
      {
          "id": 3,
          "name": "marketing",
          "icon": "mo-icn-Marketing",
          "router":"detail",
          "show": false,
          "hiden":false,
          "childrens":[
            {
              "key":"4",
              "name":"marketing1",
              "router":"detail",
              "show":false,

            },
             {
              "key":"5",
              "name":"marketing2",
              "show":false,
              "child": true,
              "router":"detail",
             "childrens2": [
              {
                "name":"marketing21",
                "router":"detail",
                "hiden":false
                },
                {
                  "name":"marketing21",
                  "router":"detail",
                  "hiden":false
                },
                {
                  "name":"marketing21",
                   "router":"detail",
                   "hiden":false
                },
             ]
             },
             {
              "key":"6",
              "name":"marketing3",
              "router":"detail",
              "show":false,
              "childrens2": [
                {
                "name":"marketing21",
                "router":"detail",
                "hiden":false
                },
                {
                  "name":"marketing21",
                  "router":"detail",
                  "hiden":false
                },
                {
                  "name":"marketing21",
                   "router":"detail",
                   "hiden":false
                },
               ]

            },
            {
              "key":"7",
              "router":"detail",
              "name":"marketing4",
              "show":false,

            },
            {
              "key":"8",
              "router":"detail",
              "name":"marketing5",
              "show":false,

            }
          ]
      },
      {
        "id": 4,
        "name" : "sales",
        "icon": "mo-icn-deal-activity",
        "router":"detail",
        "show": false,
        "hiden":false,
        "childrens": [
          {
            "name":"sales1",
            "router":"detail",
            "show":false,

          },
          {
            "name":"sales2",
            "router":"detail",
            "show":false,

          },
          {
            "name":"sales3",
            "router":"detail",
            "show":false,

          },
          {
            "name":"sales4",
            "router":"detail",
            "show":false,

          }
        ]
      }
    ]
   }

   addmar(item:any , parent:Array<any>): void {
    if(!item.childrens){
      this.pathRouting =item.router;
      parent.forEach((event:any) => {
        event.hiden = false;
        event.show=false;
        if(event.childrens){
          event.childrens.forEach((childrens:any) =>{
            childrens.show=false;
            if(childrens.childrens){
              childrens.childrens.forEach((item:any)=>{
                item.hiden = false;
              })
            }
          })
        }
      }
      );
      item.hiden = true;
    }
     else if(item.show){
      item.show = false;
    }
    else if(!item.show){
      parent.forEach((even:any) =>{
        even.show = false;
      })
      item.show = true;
    }
  }

  addmar12(childrens1:any , parent:Array<any>){
    if(!childrens1.childrens2){
      this.pathRouting =childrens1.router;
      parent.forEach((event:any) => {
        event.hiden = false;
        event.show=false;
        if(event.childrens1){
          event.childrens1.forEach((childrens1:any) =>{
            childrens1.show=false;
            if(childrens1.childrens1){
              childrens1.childrens1.forEach((item:any)=>{
                childrens1.hiden = false;
              })
            }
          })
        }
      }
      );
      childrens1.hiden = true;
    }
    else if(childrens1.show){
      childrens1.show = false;
    }
    else if(!childrens1.show){
      parent.forEach((event) => event.show=false)
      childrens1.show = true;
    }
  }
  toggle1(){
    if (this.toggle === false) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
  click3(childrens3:any, parent:Array<any>, parent2:Array<any> ){
    if(!childrens3.childrens2){
      this.pathRouting =childrens3.router;
      parent.forEach((event:any) => {
        event.hiden = false;
        if(event.childrens3){
          event.childrens3.forEach((childrens3:any) =>{
            if(childrens3.childrens1){
              childrens3.childrens1.forEach((item:any)=>{
                childrens3.hiden = false;
              })
            }
          })
        }
      }
      );
      childrens3.hiden = true;
      if(childrens3.hiden){
        parent2.forEach((envent:any)=> {
          envent.hiden=false
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

