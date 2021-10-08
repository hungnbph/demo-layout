## REQUIREMENTS TOOL AND ENVIRONMENTS
 1. Vscode
 
 2. Node version 14.17.x
 
 3. Angular CLI 12.x

 4. Smart git
---

## PLUGIN
 1. Angular Language Service
 
 2. Code Spell Checker
 
 3. ESLint
 
 4. GitLens
 
 5. SCSS Formatter
---

## LINK
- [git quản lý sources](https://gitbucket.mobio.vn/)
- Link [Thiết kế](https://zeplin.io/)
  - Yêu cầu tự đăng ký tài khoản theo mail công ty (***@mobio.vn)
- [Quản lý task và bug](https://admin-cv.mobio.vn/)
  - yêu cầu tự đăng ký tài khoản theo mail công ty (***@mobio.vn)
- [Khai báo đa ngôn ngữ](https://docs.google.com/spreadsheets/d/1Mb2w_vAPN9zKZJAMf4_7cbzPQdktykZjVJCsva5dh7o/edit#gid=597993232)
---

## CODING CONVENTION
 
 1. Format code sử dụng tab space = 2.
 
 2. Format html force. Mở Setting vscode search 'html attr' > "html.format.wrapAttributes": "force".
 
 3. 1 file code tối đa 400 dòng.
 
 4. 1 hàm tối đa 75 dòng.
 
 5. Tên component sẽ có định dạng:
 	  - *.component.[html,scss,ts] 
    - *.directive.ts
    - *.module.ts 
    - *.service.ts
    - *.pipe.ts
    - *.interface.ts
    - *.type.ts
    - *.define.ts
 6. Thư mục chứa các interface và type là interfaces
 
 7. Tên interface bắt đầu bằng I.Tên type viết bằng chữ Hoa bắt đầu bằng chữ 'TYPE' và ngăn cách bởi dấu '_' Ví dụ:
  ```ts
    export interface IUser{
      username:string;
      age:number;
    }

    export type TYPE_EVENT = 'hover' | 'click';
  ```

  8. Tên thư mục đặt bằng kí tự thường và cách nhau bởi dấu "-". Ví dụ:
	   - Thư mục call center => call-center

  9. Tên thư mục con không chứa tên thư mục cha. Ví dụ: 
     * Thư mục customer chứa list customer thì cấu trúc thư mục sẽ như sau:
      ```
        📂customer
          │ 📂list
          │  └ 📜list.component.html
          │  └ 📜list.component.scss
          │  └ 📜list.component.ts
          │ 📜customer.component.html
          │ 📜customer.component.scss
          └ 📜customer.component.ts
      ```



  10. Tên selector sẽ bắt đầu bằng mo, sau đó đến tên các thư mục chứa nó. Tên các thư mục cách nhau bởi dấu "-" và các từ của tên thư mục sẽ cách nhau bởi dấu "_". Ví dụ:<br>
    - Project dashboard
      ```
        📂app
          │ 📂dashboard
          │  │ 📜dashboard.component.html
          │  │ 📜dashboard.component.scss
          │  │ 📜dashboard.component.ts => mo-marketing-dashboard
          │  └ 📂call-center
          │    │ 📜call-center.component.html
          │    │ 📜call-center.component.scss
          │    └ 📜call-center.component.ts => mo-marketing-dashboard-call_center
          │ 📜app.component.html
          │ 📜app.component.scss
          └ 📜app.component.ts => mo-marketing-root
      ```


  11. Quy tắc nhóm các component trong cùng 1 module.Các thư mục trong cùng 1 module tên có phần bắt đầu giống nhau thì gộp chúng chung vào 1 thư mục.<br>
    - Ví dụ:<br>
      ```
        📂app
          │ 📂 box-info
          │  │ 📜box-info.component.html
          │  │ 📜box-info.component.scss
          │  └ 📜box-info.component.ts
          │  📂 box-update
          │  │ 📜 box-update.component.html
          │  │ 📜 box-update.component.scss
          │  └ 📜 box-update.component.ts
          │  📂 box-create
          │  │  📜 box-create.component.html
          │  │  📜 box-create.component.scss
          │  └  📜 box-create.component.ts
          │ 📜app.component.html
          │ 📜app.component.scss
          └ 📜app.component.ts => mo-marketing-root
      ```
      Sẽ viết như sau:
       ```
        📂app
          │  📂 box
          │  │  📂 info
          │  │  │ 📜 info.component.html
          │  │  │ 📜 info.component.scss
          │  │  └ 📜 info.component.ts
          │  │  📂 update
          │  │  │ 📜 update.component.html
          │  │  │ 📜 update.component.scss
          │  │  └ 📜 update.component.ts
          │  │  📂 create
          │  │  │  📜 create.component.html
          │  │  │  📜 create.component.scss
          │  │  └  📜 create.component.ts
          │ 📜app.component.html
          │ 📜app.component.scss
          └ 📜app.component.ts => mo-marketing-root
      ```


  12. Cấu trúc class Component.<br>
    - Ví dụ:
      ```ts
        export class DemoComponent implements,OnInit,OnChanges,AfterViewInit,OnDestroy{
          attributeA:string;
          attributeB:number;

          @Input() attributeC:string;
          @Input() attributeD:string;

          @Output() readonly moChange:EventEmitter<type> = new EventEmitter();
          @Output() readonly moClick:EventEmitter<type> = new EventEmitter();

          @ViewChild('templateA') templateA!:TemplateRef;
          @ViewChild('templateB') templateB!:TemplateRef;

          constructor(private auth:AuthenticationService){
              this.attributeA = 'example';
              this.attributeB = 1;
          }

          ngOnChanges(changes:SimpleChanges) {
          }

          ngOnInit() {
          }

          ngOnAfterViewInit(){
          }

          ngOnDestroy(){
          }
        }
      ```



  13. Tên biến @Output bắt đầu bằng tiền tố  **mo**<br>, ngoài trừ việc viết custom towaway binding
    - Ví dụ:
      ```ts
          @Output() readonly moChange:EventEmitter<type> = new EventEmitter();
          @Output() readonly moClick:EventEmitter<type> = new EventEmitter();
      ```


  14. Hàm lắng nghe sự kiện hoặc Output bắt đầu bằng tiền tố **handler**<br>
    - Ví dụ:
      ```ts
          handlerClick(){
    
          }

          handlerChange(){

          }
      ```


 15. Không sử dụng ký tự đăc biệt ở đầu và cuối tên biến hoặc hàm
  - Ví dụ:
    ```ts
          attributeB$:number;

          @Output() readonly _moChange:EventEmitter<type> = new EventEmitter();

          constructor(private _auth:AuthenticationService){

          }

          private _handlerChange(){

          }
    ```
    Sẽ viết thành
     ```ts
          attributeB:number;

          @Output() readonly moChange:EventEmitter<type> = new EventEmitter();

          constructor(private auth:AuthenticationService){

          }

          private handlerChange(){
            
          }
    ```
  

 16. Không viết code xử lý ngay trên HTML<br>
  - Ví dụ:
    ```ts
          <mo-demo (moChangeKeySelected)="keys = $event.keys"><mo-demo>
    ```
    Sẽ viết thành
     ```ts
          <mo-demo (moChangeKeySelected)="updateKeys($event.keys)"><mo-demo>
    ```

  17. Khi sử dụng 1 event DOM phải sử dụng hàm stopPropagation() của đối tượng $event.<br>
   - Ví dụ:<br>
      Template:
      ```ts
          <div (click)="handlerClick($event)" >Load data</div>
      ```
        Component: 
      ```ts
          handlerClick(event:Event){
                event.stopPropagation();
                ...
            }
        ```


  18. Xóa import không dùng. Chuột phải > sources action > Organize import.<br>

  19. Sử dụng format mặc định của vscode. Không cài plugin nào liên quan đến foramt code.<br>

  20. Trên html khi sử dụng biến thì phải được khai báo ở file component.<br>

  21. Xóa bỏ các dependency không dùng trong package.json.<br>

  22. Xóa các comment thừa khi không dùng đến.<br>

  23. Xóa các console log thì đẩy code.<br>

  24. Sử dụng class (atomic css) thay vì style inline trên html.<br>

  25. Tạo constant public static readonly.Các chữ trong từ viết hoa và cách nhau bở dấu "_".<br>
  * Ví dụ:<br>
      ```ts
        export class ConstantsDefine{
          public static readonly MODULE_NAME:string = 'lib';
          public static readonly GET_CONFIG_DEFAULT: () => Array<string> = () => {
            return ['config'];
          }
        }
      ```

  26. Sử dung key **type** trong type script.Các chữ trong từ viết hoa và cách nhau bở dấu "_".<br>
    * Ví dụ:<br>
      ```ts
          type MODE_INPUT = 'text' │ 'number' │ 'string';
      ```
  
  27. Quy tắc đặt key I18n<br>
  - Tiền tố bắt đầu là: i18n và trong key chỉ chứa các từ viết thường sẽ cách nhau bởi dấu "_". key không được viết tắt.
  - [I18n cần được khai báo trên file excel](https://docs.google.com/spreadsheets/d/1Mb2w_vAPN9zKZJAMf4_7cbzPQdktykZjVJCsva5dh7o/edit#gid=370460950)

  28. Sử dụng được đa ngôn ngữ.<br>
  - Các text trên form không lấy từ server bắt buộc phải hỗ trợ đa ngôn ngữ (I18n)<br>

  29. Tất cả các giá trị mặc định trong component phải viết khai báo trong constructor() nếu cần, ngoại trừ @Output.<br>
    ```ts
        export class componentA {
          username:string = '';
          age:number = 0;
          @Output() readonly moChange:EventEmitter<Object> = new EventEmitter();
          constructor(){

          }
        }
      ```
      Sẽ viết thành
      ```ts
        export class componentA {
          username:string;
          age:number;
          @Output() readonly moChange:EventEmitter<Object> = new EventEmitter();
          constructor(){
            this.username = '';
            this.age = 0;
          }
        }
      ```

  30. Hạn chế sử dụng cấu trúc if-else,nên chuyển sang switch-case hoặc if và return nếu thỏa mãn điều kiện.Ví dụ:<br>
      ```ts
        if(a === true){
          // TODO
        }else {
          // TODO
        }
      ```
      Sẽ viết thành
      ```ts
      if(a === true){
          // TODO
          return;
        }
          //TODO
      ```

  31. Viết style theo cấu trúc scss.<br>

  32. Tên class css bắt đầu bằng **mo**.<br>

  33. Hạn chế sử dụng kiểu  any.<br>
   - Chỉ sử dụng kiểu any khi không biết chính xác kiểu dữ liệu của field.Tạo Interface cho các field là object.<br>

  34. Không sử dụng từ khóa **var**. Sử dụng **let** hoặc **const**.<br>

  35. Không sử dụng từ khóa **function**. Chuyển về dùng arrow function.<br>

  36. Không dùng biểu thức + để nối các chuỗi.Sử dụng template string.<br>
    - Ví dụ:
      ```ts
        const time:string = hours_tmp + ':' + minutes_tmp + ':' + seconds_tmp;
      ```
      Sẽ viết thành
      ```ts
        const time:string = `${hours_tmp}:${minutes_tmp}:${seconds_tmp}`;
      ```

  37. Bỏ hết document tự generate.<br>
    - Ví dụ: 
      ```ts
      /**
      * @method setRequestOptions
      * @description config header with option another attach request
      */
      ```

  38. Khi code chức năng mới<br>
    - Không được phép đẩy code lên master và develop.Yêu cầu tách branch mới từ develop.<br>

  39. Khi Phát triển xong<br>
    - build check **AOT** trước khi báo merge. Nếu báo merge chạy aot lỗi sẽ phải đóng 10k vào quỹ<br>
    - Yêu cầu báo merge vào nhóm **Báo merge frontend**.<br>
    - Nếu tính năng cần backend nên cùng thì phải ghi rõ khi báo merge. Nếu ko báo sẽ đóng 10k vào quỹ<br>

  40. Xử lý khi thấy giao diện khác so với global style guild<br>
    - Trong phần việc được giao khi thấy giao diện phát sinh mới cần confirm với leader và thiết kế.<br>

  41. Không sử dụng hàm trên view. nếu muốn cần trao đổi vs leader trước để tìm giải pháp<br>
    - Không sử dụng hàm trên view gọi xuống model mà nên sử dụng bằng pipe.Ví dụ<br>
      ```html
      <div [style.width] = "calcItemWidth(item)"></div>
      ```
      Sẽ viết thành
      ```html
      <div [style.width] = "item | calcItemWidthPipe"></div>
      ```

  42. Quy tắc sử dụng thư viện.<br>
    - Những thư viện đã được download về project muốn sử dụng phải khai báo trong .angular-cli, không khai báo trên index.html. nếu có file min thì phải sử dụng file *.min.js<br>
  43. Quy tắc sử dụng api load dữ liệu.<br>
    - Cập nhật các trường thông tin cho 1 đối tượng hoặc thêm 1 đối tượng mới vào một mảng không được phép gọi API để load lại tất cả mảng đối tượng.<br>
    - Khi load form sửa thông tin 1 đối tượng đã có thì không được phép gọi API để load lại thông tin đã có.<br>

  44. Chỉ khai báo 1 service để thực hiện việc gọi API cho 1 module.<br>
    - Chỉ khai báo 1 service để thực hiện việc gọi API,service này sẽ được cho vào thư mục **"/app/common/service/base-service"**.<br>
    - Nếu module cần sử dụng các service để thực hiện riêng nghiệp vụ của mình thì sẽ tạo 1 thư mục service.<br>
    - Các service để phục vụ cho riêng module đó sẽ được cho vào thư mục service này.<br>
    - Những service không phải dùng chung cho các module thì không được phép tạo trên common folder.<br>

  45. Tất cả các subcrible sẽ phải được unsubcrible.<br>

  46. Không sửa các file config .eslintrc ,husky ,tsconfig ,glossary-and-convention<br>

  47. Khi cần dùng một thư viện mới, cần báo trước với leader. Nếu thư viện được chấp nhận sẽ được khai báo trên project lib.<br>

  48. Các project (không phải project lib) thì sẽ không được phép dùng **:host /deep/** , **::ng-deep**<br>

  49.  Tên class css cần được viết đầy đủ theo tên thư mục. Ví dụ
    * Project dashboard
        ```
          📂app
            │ 📂dashboard
            │  │ 📜dashboard.component.html
            │  │ 📜dashboard.component.scss
            │  │ 📜dashboard.component.ts
            │  └ 📂call-center
            │    │ 📜call-center.component.html
            │    │ 📜call-center.component.scss
            │    └ 📜call-center.component.ts
            │ 📜app.component.html
            │ 📜app.component.scss
            └ 📜app.component.ts => mo-marketing-root
        ```
        file call-center.component.scss
        ```scss
          .mo-dashboard-call-center{
            with:100px;
            height:100px;
            .mo-dashboard-call-center-content{
              color:#333333;
              font-size:12px;
            }
          }
        ```

  50. Không fix bug nếu như chưa được log trên [remind](https://admin-cv.mobio.vn). Trừ một số trường hợp đặc biệt cần gấp thì sẽ phải báo cho leader.<br>

  51. Build các phần cho tester test trước. Tester báo phần code không còn lỗi thì mới báo merge.

## CÁC LỖI XỬ PHẠT

1. Khi sử dụng kểu any cần báo với leader.<br>
2. Tạo tên nhánh theo đúng conversion. giống convensiton tạo selectet.<br>
3. Không được code trực tiếp trên nhánh develop và master.nếu muốn cần báo vs leader.<br>
4. Không được merge code các nhánh khác về master và develop.<br>
5. Merge nhánh cha về nhánh đang báo merge.<br>
6. Khi báo merge cần ghi chú rõ cần Backend support hay không.<br>
7. Đặt tên selecter sai quy định.<br>
8. Tự ý sửa các file config .eslintrc ,husky ,tsconfig ,glossary-and-convention<br>
9. tự ý sửa shared lib.<br>
10. Merge code của người khác bị conflict không báo vs người đang làm cùng phần code này và leader.<br>
11. các file có space = 2.<br>
12. format mặc định theo vscode.<br>
13. file không được vượt quá 400 dòng. khi quá cần báo leader để tìm giải pháp.<br>
14. Không được sử dụng inner html dưới file ts<br>
15. không được gán url vào 1 tag html, nếu muốn cần báo với leader<br>



