export interface Idata {
  id?: number;
  name: string;
  icon?: string;
  router: string;
  show?: boolean;
  hiden: boolean;
  childrens?: Array<Idata>;

}

export const data: Array<Idata> = [

  {
    id: 1,
    name: 'Trang chủ',
    icon: 'mo-icn-Home',
    router: 'home',
    show: false,
    hiden: false,
  },
  {
    id: 2,
    name: 'CDP',
    router: 'cdp',
    icon: 'mo-icn-personal-n-brand',
    show: false,
    hiden: false,
    childrens: [
      {

        name: 'Profiles',
        router: 'cdp/profile',
        show: false,
        hiden: false,
      },
      {

        name: 'Hợp nhất Profiles',
        router: 'cdp/untyprofile',
        show: false,
        hiden: false,

      },
      {

        name: 'Kiểm tra Email tồn tại',
        router: 'cdp/check-email',
        show: false,
        hiden: false,

      },
      {

        name: 'Quản trị nhóm Profiles',
        router: 'cdp/profile-admin',
        show: false,
        hiden: false,

      },
      {

        name: 'Tùy biến Profile',
        router: 'cdp/profile-customization',
        show: false,
        hiden: false,

      },
      {

        name: 'Tùy biến Event',
        router: 'cdp/event-customization',
        show: false,
        hiden: false,

      }
    ]
  },
  {
    id: 3,
    name: 'Marketing',
    router: 'marketing',
    icon: 'mo-icn-Marketing',
    show: false,
    hiden: false,
    childrens: [
      {

        name: 'Marketing Automation',
        router: '',
        show: false,
        hiden: false,
        childrens: [
          {
            name: 'Chiến dịch Marketing',
            router: 'marketing/campaign-marketing',
            hiden: false
          },
          {
            name: 'Master Campaign',
            router: 'marketing/master-campaign',
            hiden: false
          },
          {
            name: 'Trường cá nhân Marketing',
            router: 'marketing/individual-marketing',
            hiden: false
          },
        ]

      },
      {

        name: 'Journey Builder',
        show: false,
        router: 'jouney-builder',
        hiden: false,
        childrens: [
          {
            name: 'Journey Builder',
            router: 'marketing/jouney-builder',
            hiden: false

          },
          {
            name: 'Master Campaign',
            router: 'marketing/jouney-campaign-master',
            hiden: false
          },
          {
            name: 'Mẫu e-mail',
            router: 'marketing/mau-email',
            hiden: false
          },
        ]
      },
      {

        name: 'Ads Automation',
        router: '',
        show: false,
        hiden: false,
        childrens: [
          {
            name: 'Quy tắc tự động FB Ads',
            router: 'marketing/fb-ads',
            hiden: false
          },
          {
            name: 'Quy tắc Kết quả tự động',
            router: 'marketing/quytac-ads',
            hiden: false
          },
          {
            name: 'Đối tượng quảng cáo',
            router: 'marketing/object-ads',
            hiden: false
          },
          {
            name: 'Chiến dịch quảng cáo FB',
            router: 'marketing/chien-dich-fb-ads',
            hiden: false
          },
          {
            name: 'Kết nối tài khoản Ads',
            router: 'marketing/connect-acount-ads',
            hiden: false
          },
        ]

      },
      {

        router: 'detail',
        name: 'SMS Brandname',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Template SMS',
            router: 'marketing/tempalate-sms',
            hiden: false
          },
        ]
      },
      {

        router: 'detail',
        name: 'Landing Page',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Tạo URL Landing Page',
            router: 'marketing/creact-landing-page',
            hiden: false
          },
          {
            name: 'Tích hợp với bên thứ ba',
            router: 'marketing/tich-hop',
            hiden: false
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Sales',
    router: 'detail',
    icon: 'mo-icn-deal-activity',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Đơn hàng',
        router: 'detail',
        hiden: false,
        show: false,

      },
      {
        name: 'Quy trình bán hàng',
        router: 'detail',
        hiden: false,
        show: false,

      },
      {
        name: 'Trường tùy biến Đơn hàng',
        router: 'detail',
        hiden: false,
        show: false,

      },
      {
        name: 'Thiết lập KPI mục tiêu',
        router: 'detail',
        hiden: false,
        show: false,

      }
    ]
  },
  {
    id: 5,
    name: 'Services',
    router: 'detail',
    icon: 'mo-icn-Services',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Online & mạng xã hội',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Tổng quan',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Chat & trả lời khách hàng',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cấu hình ẩn hiện bình luận',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cấu hình trả lời nhanh',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Phân công hỗ trợ',
            router: 'detail',
            hiden: false
          }
        ]

      },
      {
        name: 'Web live chat',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Kết nối với website',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cấu hình khung chat',
            router: 'detail',
            hiden: false
          },
        ]
      },
      {
        name: 'Tổng đài',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Quản lý cuộc gọi',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cấu hình máy lẻ',
            router: 'detail',
            hiden: false
          },
        ]
      },
      {
        name: 'Ticket',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Ticket',
            router: 'detail',
            hiden: false
          },
        ]
      },
      {
        name: 'Loyalty',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Chính sách tích điểm',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Chính sách tặng voucher',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Chính sách thẻ thành viên',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Kho mã thẻ thành viên',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cấu hình đánh giá sau giao dịch',
            router: 'detail',
            hiden: false
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'CMS',
    router: 'detail',
    icon: 'mo-icn-CMS',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Tags',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Tag hành vi',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Tag phân loại công việc',
            router: 'detail',
            hiden: false
          }
        ]

      },
      {
        name: 'Voucher',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Voucher',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Kho mã voucher',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Xác thực voucher',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Tặng điểm voucher',
            router: 'detail',
            hiden: false
          }
        ]
      },
      {
        name: 'Thư viện sản phẩm',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Thư viện sản phẩm',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Danh mục sản phẩm',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Nhà sản xuất',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Trường tùy biến sản phẩm',
            router: 'detail',
            hiden: false
          }
        ]
      },
      {
        name: 'Thương hiệu & Địa điểm',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Thương hiệu cha',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Thương hiệu con',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Khu vực',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Cơ sở chi nhánh',
            router: 'detail',
            hiden: false
          }
        ]
      },
      {
        name: 'App',
        router: 'detail',
        hiden: false,
        show: false,
        childrens: [
          {
            name: 'Banner',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Tin Tức',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Video',
            router: 'detail',
            hiden: false
          },
          {
            name: 'Gửi thông báo in-app',
            router: 'detail',
            hiden: false
          }
        ]
      }
      ,
      {
        name: 'Phiếu khảo sát',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 7,
    name: 'Thống kê',
    router: 'detail',
    icon: 'mo-icn-Report-MKT',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Báo cáo Voucher',
        router: 'detail',
        hiden: false,
        show: false,
      },
      {
        name: 'Đánh giá sau giao dịch',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 8,
    name: 'SAMSUNG',
    router: 'detail',
    icon: 'mo-icn-Tenant',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Import SAMSUNG',
        router: 'detail',
        hiden: false,
        show: false,
      },
      {
        name: 'Xuất bình luận Fanpage FB',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 9,
    name: 'BANK',
    router: 'detail',
    icon: 'mo-icn-bank',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Import Profiles nhận ưu đãi',
        router: 'detail',
        hiden: false,
        show: false,
      },
      {
        name: 'Cấu hình bộ lọc',
        router: 'detail',
        hiden: false,
        show: false,
      },
      {
        name: 'Báo cáo hiệu quả từ MKT',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 10,
    name: 'Quản lý doanh nghiệp',
    router: '',
    icon: 'mo-icn-Tenant',
    show: false,
    hiden: false,
  },
  {
    id: 11,
    name: 'Team',
    router: 'detail',
    icon: 'mo-icn-bank',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'Team',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 12,
    name: 'SunPOS',
    router: 'detail',
    icon: 'mo-icn-Tenant',
    show: false,
    hiden: false,
    childrens: [
      {
        name: 'SunPOS',
        router: 'detail',
        hiden: false,
        show: false,
      }
    ]
  },
  {
    id: 13,
    name: 'Sun Group',
    router: 'detail',
    icon: 'mo-icn-Tenant',
    show: false,
    hiden: false,
  }
];
