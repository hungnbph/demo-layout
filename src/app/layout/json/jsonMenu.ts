

export const data = [

  {
    'id': 1,
    'name': 'Trang chủ',
    'icon': 'mo-icn-Home',
    'router': 'home',
    'show': false,
    'hiden': false,
  },
  {
    'id': 2,
    'name': 'CDP',
    'show': false,
    'icon': 'mo-icn-personal-n-brand',
    'router': 'cdp',
    'hiden': false,
    'childrens': [
      {
        'key': '1',
        'name': 'Profiles',
        'router': 'cdp/profile',
        'show': false,
        'hiden': false,

      },
      {
        'key': '2',
        'name': 'Hợp nhất Profiles',
        'router': 'cdp/untyprofile',
        'show': false,
        'hiden': false,

      },
      {
        'key': '3',
        'name': 'Kiểm tra Email tồn tại',
        'router': 'cdp/check-email',
        'show': false,
        'hiden': false,

      },
      {
        'key': '4',
        'name': 'Quản trị nhóm Profiles',
        'router': 'cdp/profile-admin',
        'show': false,
        'hiden': false,

      },
      {
        'key': '5',
        'name': 'Tùy biến Profile',
        'router': 'cdp/profile-customization',
        'show': false,
        'hiden': false,

      },
      {
        'key': '6',
        'name': 'Tùy biến Event',
        'router': 'cdp/event-customization',
        'show': false,
        'hiden': false,

      }
    ]
  },
  {
    'id': 3,
    'name': 'Marketing',
    'icon': 'mo-icn-Marketing',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'key': '4',
        'name': 'Marketing Automation',
        'router': 'detail',
        'show': false,
        'hiden': false,
        'childrens2': [
          {
            'name': 'Chiến dịch Marketing',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Master Campaign',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Trường cá nhân Marketing',
            'router': 'detail',
            'hiden': false
          },
        ]

      },
      {
        'key': '5',
        'name': 'Journey Builder',
        'show': false,
        'router': 'detail',
        'hiden': false,
        'childrens2': [
          {
            'name': 'Journey Builder',
            'router': 'detail',
            'hiden': false

          },
          {
            'name': 'Master Campaign',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Mẫu e-mail',
            'router': 'detail',
            'hiden': false
          },
        ]
      },
      {
        'key': '6',
        'name': 'Ads Automation',
        'router': 'detail',
        'show': false,
        'hiden': false,
        'childrens2': [
          {
            'name': 'Quy tắc tự động FB Ads',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Quy tắc Kết quả tự động',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Đối tượng quảng cáo',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Chiến dịch quảng cáo FB',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Kết nối tài khoản Ads',
            'router': 'detail',
            'hiden': false
          },
        ]

      },
      {
        'key': '7',
        'router': 'detail',
        'name': 'SMS Brandname',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Template SMS',
            'router': 'detail',
            'hiden': false
          },
        ]
      },
      {
        'key': '8',
        'router': 'detail',
        'name': 'Landing Page',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Tạo URL Landing Page',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Tích hợp với bên thứ ba',
            'router': 'detail',
            'hiden': false
          }
        ]
      }
    ]
  },
  {
    'id': 4,
    'name': 'Sales',
    'icon': 'mo-icn-deal-activity',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Đơn hàng',
        'router': 'detail',
        'hiden': false,
        'show': false,

      },
      {
        'name': 'Quy trình bán hàng',
        'router': 'detail',
        'hiden': false,
        'show': false,

      },
      {
        'name': 'Trường tùy biến Đơn hàng',
        'router': 'detail',
        'hiden': false,
        'show': false,

      },
      {
        'name': 'Thiết lập KPI mục tiêu',
        'router': 'detail',
        'hiden': false,
        'show': false,

      }
    ]
  }
  , {
    'id': 5,
    'name': 'Services',
    'icon': 'mo-icn-Services',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Online & mạng xã hội',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Tổng quan',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Chat & trả lời khách hàng',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cấu hình ẩn hiện bình luận',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cấu hình trả lời nhanh',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Phân công hỗ trợ',
            'router': 'detail',
            'hiden': false
          }
        ]

      },
      {
        'name': 'Web live chat',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Kết nối với website',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cấu hình khung chat',
            'router': 'detail',
            'hiden': false
          },
        ]
      },
      {
        'name': 'Tổng đài',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Quản lý cuộc gọi',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cấu hình máy lẻ',
            'router': 'detail',
            'hiden': false
          },
        ]
      },
      {
        'name': 'Ticket',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Ticket',
            'router': 'detail',
            'hiden': false
          },
        ]
      },
      {
        'name': 'Loyalty',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Chính sách tích điểm',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Chính sách tặng voucher',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Chính sách thẻ thành viên',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Kho mã thẻ thành viên',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cấu hình đánh giá sau giao dịch',
            'router': 'detail',
            'hiden': false
          }
        ]
      }
    ]
  }
  , {
    'id': 6,
    'name': 'CMS',
    'icon': 'mo-icn-CMS',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Tags',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Tag hành vi',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Tag phân loại công việc',
            'router': 'detail',
            'hiden': false
          }
        ]

      },
      {
        'name': 'Voucher',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Voucher',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Kho mã voucher',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Xác thực voucher',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Tặng điểm voucher',
            'router': 'detail',
            'hiden': false
          }
        ]
      },
      {
        'name': 'Thư viện sản phẩm',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Thư viện sản phẩm',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Danh mục sản phẩm',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Nhà sản xuất',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Trường tùy biến sản phẩm',
            'router': 'detail',
            'hiden': false
          }
        ]
      },
      {
        'name': 'Thương hiệu & Địa điểm',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Thương hiệu cha',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Thương hiệu con',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Khu vực',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Cơ sở chi nhánh',
            'router': 'detail',
            'hiden': false
          }
        ]
      },
      {
        'name': 'App',
        'router': 'detail',
        'hiden': false,
        'show': false,
        'childrens2': [
          {
            'name': 'Banner',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Tin Tức',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Video',
            'router': 'detail',
            'hiden': false
          },
          {
            'name': 'Gửi thông báo in-app',
            'router': 'detail',
            'hiden': false
          }
        ]
      }
      ,
      {
        'name': 'Phiếu khảo sát',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 7,
    'name': 'Thống kê',
    'icon': 'mo-icn-Report-MKT',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Báo cáo Voucher',
        'router': 'detail',
        'hiden': false,
        'show': false,
      },
      {
        'name': 'Đánh giá sau giao dịch',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 8,
    'name': 'SAMSUNG',
    'icon': 'mo-icn-Tenant',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Import SAMSUNG',
        'router': 'detail',
        'hiden': false,
        'show': false,
      },
      {
        'name': 'Xuất bình luận Fanpage FB',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 9,
    'name': 'BANK',
    'icon': 'mo-icn-bank',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Import Profiles nhận ưu đãi',
        'router': 'detail',
        'hiden': false,
        'show': false,
      },
      {
        'name': 'Cấu hình bộ lọc',
        'router': 'detail',
        'hiden': false,
        'show': false,
      },
      {
        'name': 'Báo cáo hiệu quả từ MKT',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 10,
    'name': 'Quản lý doanh nghiệp',
    'icon': 'mo-icn-Tenant',
    'router': '',
    'show': false,
    'hiden': false,
  },
  {
    'id': 11,
    'name': 'Team',
    'icon': 'mo-icn-bank',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'Team',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 12,
    'name': 'SunPOS',
    'icon': 'mo-icn-Tenant',
    'router': 'detail',
    'show': false,
    'hiden': false,
    'childrens': [
      {
        'name': 'SunPOS',
        'router': 'detail',
        'hiden': false,
        'show': false,
      }
    ]
  },
  {
    'id': 13,
    'name': 'Sun Group',
    'icon': 'mo-icn-Tenant',
    'router': 'detail',
    'show': false,
    'hiden': false,
  }
];
