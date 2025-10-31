import { IProductData } from "@/types/product-d-t";

// Danh sách tên các loại rau hết hàng
const outOfStockVegetableNames = [
  "Cải thảo",
  "Cải ngồng",
  "Cải xanh",
  "Rau dền",
  "Rau muống",
  "Rau đay",
  "Rau mồng tơi",
  "Rau diếp cá",
  "Rau kinh giới",
  "Rau tía tô",
  "Rau mùi",
  "Rau húng quế",
  "Rau bạc hà",
  "Rau mùi tây",
  "Bông cải xanh",
  "Bông cải trắng",
  "Măng tây",
  "Atiso",
  "Bắp cải",
  "Rau cần tây",
  "Rau bina",
  "Cà rốt",
  "Khoai tây",
  "Khoai lang",
  "Bí đao",
];

const outOfStockVegetableImages = [
  {
    original: "/assets/img/product/new/cai-thao.jpg", // Cải thảo - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-ngong.webp", // Cải ngồng - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/cai-xanh.jpg", // Cải xanh - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-den.jpg", // Rau dền - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-muong.png", // Rau muống - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-day.webp", // Rau đay - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-mong-toi.webp", // Rau mồng tơi - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-diep-ca.webp", // Rau diếp cá - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-kinh-gioi.png", // Rau kinh giới - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/tiato.jpg", // Rau tía tô - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/raumui.jpg", // Rau mùi - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-hung-que.jpg", // Rau húng quế - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-bac-ha.jpg", // Rau bạc hà - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-mui-tay.jpg", // Rau mùi tây - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/bong-cai-xanh.jpg", // Bông cải xanh - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/bong-cai-trang.jpg", // Bông cải trắng - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/mang-tay.jpg", // Măng tây - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/atiso.jpg", // Atiso - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/bap-cai.jpg", // Bắp cải - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-can-tay.jpg", // Rau cần tây - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/rau-bina.jpg", // Rau bina - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/ca-rot.jpg", // Cà rốt - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/khoai-tay.jpg", // Khoai tây - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/khoai-lang.jpg", // Khoai lang - Cập nhật ảnh tại đây
  },
  {
    original: "/assets/img/product/new/bi-dao.png", // Bí đao - Cập nhật ảnh tại đây
  },
];

const product_data: IProductData[] = [
  // Original products
  {
    id: 1,
    sku: "001",
    title: "Hành tím/ Hành tây/ Hành khô Kinh men 1kg",
    price: 18000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-1.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Onion',
    },
    brand: "Super Market",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-1.jpg",
      "/assets/img/product/new/product-img-1-thumb.jpg",
    ],
    description: "Hành tím tươi ngon, chất lượng cao được chọn lọc kỹ càng. Sản phẩm được trồng theo phương pháp hữu cơ, đảm bảo an toàn vệ sinh thực phẩm. Hành tím có vị cay nhẹ, thơm đặc trưng, phù hợp cho nhiều món ăn. Sản phẩm được đóng gói cẩn thận để giữ được độ tươi ngon. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng tốt nhất.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tốt",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      },
      {
        id: 2,
        name: "Mark",
        comment: "Tuyệt vời",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Onion",
      "Dried Onion",
      "Purple Onion",
    ],
    color: ['Blue'],
    status: "publish",
    sold: 2,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  // ... rest of your old products as above ...
  // The rest are unchanged until id: 19

  {
    id: 2,
    sku: "002",
    title: "Chanh tươi chua ngọt tự nhiên",
    price: 25000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-2.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Lemon',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '4pc(s)',
    description: "Chanh tươi ngon, mọng nước được hái từ vườn. Chanh có vị chua thanh mát, thơm dịu nhẹ, giàu vitamin C. Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng cao. Phù hợp để làm nước giải khát, gia vị nấu ăn. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Lemon" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tốt",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Lemon",
      "Fresh",
    ],
    color: ['Red', 'Green'],
    status: "publish",
    sold: 10,
    created_at: "2023-10-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 3,
    sku: "003",
    title: "Su su hữu cơ tươi ngon, bổ dưỡng",
    price: 22000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-3.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Kiwi',
    },
    brand: "Super Market",
    quantity: 45,
    unit: '8pc(s)',
    gallery: [
      "/assets/img/product/new/product-img-3.jpg",
      "/assets/img/product/new/product-img-3-thumb.jpg",
    ],
    description: "Su su hữu cơ tươi ngon, giòn mát. Sản phẩm được trồng theo phương pháp hữu cơ, không sử dụng hóa chất. Su su giàu chất xơ, vitamin và khoáng chất, tốt cho sức khỏe. Có thể chế biến thành nhiều món ăn ngon. Được đóng gói và bảo quản cẩn thận.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "8pc(s)" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Tuyệt vời",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Kiwi",
      "Fresh",
      "Organic",
    ],
    color: ['Black', 'Gray'],
    status: "publish",
    sold: 15,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 4,
    sku: "004",
    title: "Gừng tươi nguyên củ hữu cơ – 250gram",
    price: 15000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-4.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Ginger',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '250gm',
    description: "Gừng tươi nguyên củ, thơm nồng. Gừng có vị cay ấm, giàu dưỡng chất, tốt cho tiêu hóa và sức khỏe. Sản phẩm được trồng hữu cơ, không phun thuốc. Thích hợp để làm gia vị, pha trà, hoặc làm thuốc. Được đóng gói cẩn thận để giữ độ tươi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "250gm" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tốt",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Ginger",
      "Vegetables",
    ],
    color: ['Yellow'],
    status: "publish",
    sold: 25,
    created_at: "2023-09-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 5,
    sku: "005",
    title: "Ổi tươi từ vườn miền Nam",
    price: 28000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-5.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Apricots',
    },
    brand: "Super Market",
    quantity: 50,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-5.jpg",
      "/assets/img/product/new/product-img-5-thumb.jpg",
    ],
    description: "Ổi tươi ngon, giòn ngọt từ vườn miền Nam. Ổi có vị ngọt thanh, giòn mát, giàu vitamin C và chất xơ. Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng cao. Có thể ăn trực tiếp hoặc ép nước. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Tuyệt vời",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Apricots",
      "Fresh"
    ],
    color: ['White'],
    status: "publish",
    sold: 19,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-08-15T18:00:00.000Z",
      endDate: "2024-07-19T18:00:00.000Z",
    },
  },
  {
    id: 6,
    sku: "006",
    title: "Xúp lơ tươi sạch",
    price: 24000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-6.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Cauliflower',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '1kg',
    gallery: [
      "/assets/img/product/new/product-img-6.jpg",
      "/assets/img/product/new/product-img-6-thumb.jpg",
    ],
    description: "Xà lách tươi sạch, giòn mát. Rau được trồng theo tiêu chuẩn an toàn, không sử dụng hóa chất độc hại. Xà lách giàu vitamin và chất xơ, tốt cho sức khỏe. Thích hợp để làm salad, gỏi hoặc ăn kèm. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1kg" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Naim",
        comment: "Bình thường",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "10 April, 2023",
      }
    ],
    tags: [
      "cauliflower",
      "vegetables",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 17,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 7,
    sku: "007",
    title: "Vải thiều tươi ngon đặc sản Việt Nam",
    price: 32000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-7.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Cranberries',
    },
    brand: "Aldi",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-7.jpg",
      "/assets/img/product/new/product-img-7-thumb.jpg",
    ],
    description: "Vải thiều tươi ngon, đặc sản Việt Nam. Vải có vị ngọt thanh, mọng nước, thơm đặc trưng. Sản phẩm được hái từ vườn, đảm bảo chất lượng cao. Giàu vitamin C và khoáng chất, tốt cho sức khỏe. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tuyệt vời",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "25 March, 2023",
      }
    ],
    tags: [
      "cranberries",
      "vegetables",
    ],
    color: ['Black'],
    status: "publish",
    sold: 12,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 9,
    sku: "009",
    title: "Chanh tươi chua ngọt tự nhiên",
    price: 20000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-2.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Lemon',
    },
    brand: "Aldi",
    quantity: 30,
    unit: '4pc(s)',
    description: "Chanh tươi ngon, mọng nước được hái từ vườn. Chanh có vị chua thanh mát, thơm dịu nhẹ, giàu vitamin C. Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng cao. Phù hợp để làm nước giải khát, gia vị nấu ăn. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Lemon" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tốt",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Lemon",
      "Fresh",
    ],
    color: ['Green'],
    status: "publish",
    sold: 15,
    created_at: "2023-10-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 10,
    sku: "0010",
    title: "Sapôchê hữu cơ tươi ngon USA 100g",
    price: 20000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-9.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Common Grape',
    },
    brand: "Albertsons",
    quantity: 35,
    unit: '100gm',
    description: "Sapôchê hữu cơ tươi ngon từ USA. Quả có vị ngọt thanh, mọng nước, thơm dịu. Sản phẩm được trồng hữu cơ, đảm bảo an toàn. Giàu vitamin và khoáng chất, tốt cho sức khỏe. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "100gm" },
      { key: "Color", value: "Orange" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Tốt",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "12 March, 2023",
      }
    ],
    tags: [
      "Common Grape",
      "Fresh",
    ],
    color: ['Pink'],
    status: "publish",
    sold: 14,
    created_at: "2023-08-08T07:18:25.000000Z",
    updated_at: "2023-11-26T15:23:32.000000Z",
  },
  {
    id: 11,
    sku: "0011",
    title: "Mận hữu cơ tươi Mộc Châu 100g",
    price: 20000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-10.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Plum',
    },
    brand: "Albertsons",
    quantity: 50,
    unit: '100gm',
    gallery: [
      "/assets/img/product/new/product-img-10.jpg",
      "/assets/img/product/new/product-img-10-thumb.jpg",
    ],
    description: "Mận hữu cơ tươi ngon từ Mộc Châu. Mận có vị ngọt thanh, giòn mát, thơm dịu. Sản phẩm được trồng hữu cơ, không sử dụng hóa chất. Giàu vitamin và chất xơ, tốt cho tiêu hóa. Được đóng gói cẩn thận để giữ độ tươi ngon.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "100gm" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Vikas",
        comment: "Bình thường",
        rating: 4.2,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "16 April, 2023",
      }
    ],
    tags: [
      "Plum",
      "fresh",
    ],
    color: ['Cyan'],
    status: "publish",
    sold: 13,
    created_at: "2023-07-08T07:18:25.000000Z",
    updated_at: "2023-09-26T15:23:32.000000Z",
  },
  {
    id: 12,
    sku: "0012",
    title: "Măng cụt hữu cơ từ Việt Nam",
    price: 20000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-11.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Mangosteen',
    },
    brand: "Albertsons",
    quantity: 55,
    unit: '5pc(s)',
    description: "Măng cụt hữu cơ tươi ngon từ Việt Nam. Quả có vị ngọt thanh, thơm đặc trưng, mọng nước. Sản phẩm được trồng hữu cơ, không sử dụng hóa chất. Giàu vitamin và chất chống oxy hóa, tốt cho sức khỏe. Được đóng gói cẩn thận.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "5pc(s)" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Pik",
        comment: "Bình thường",
        rating: 4.3,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "18 April, 2023",
      }
    ],
    tags: [
      "Mangosteen",
      "fresh",
    ],
    color: ['Indigo'],
    status: "publish",
    sold: 10,
    created_at: "2023-07-08T07:18:25.000000Z",
    updated_at: "2023-09-26T15:23:32.000000Z",
  },
  {
    id: 13,
    sku: "0013",
    title: "Chuối hữu cơ ngọt ngào",
    price: 26000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-12.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Banana',
    },
    brand: "Vons",
    quantity: 60,
    unit: '20pc(s)',
    description: "Snack chuối hữu cơ ngọt ngào, giòn tan. Sản phẩm được làm từ chuối hữu cơ chất lượng cao. Không chứa chất bảo quản, an toàn cho sức khỏe. Thích hợp làm món ăn vặt bổ dưỡng. Được đóng gói cẩn thận.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "20pc(s)" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Will",
        comment: "Tốt",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Banana",
      "fresh",
    ],
    color: ['Lime'],
    status: "publish",
    sold: 16,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-10-15T18:00:00.000Z",
      endDate: "2024-03-19T18:00:00.000Z",
    },
  },
  {
    id: 16,
    sku: "0016",
    title: "Dâu tây đẹp da, tốt cho sức khỏe 1Kg",
    price: 120000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-15.jpg"
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Strawberry',
    },
    brand: "Vons",
    quantity: 40,
    unit: '1kg',
    description: "Chuối tươi ngon, đẹp da, tốt cho sức khỏe. Chuối giàu kali, vitamin và chất xơ. Có tác dụng làm đẹp da, tốt cho hệ tiêu hóa. Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng. Được đóng gói cẩn thận.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1kg" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Xyz",
        comment: "Hoàn hảo",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "22 June, 2023",
      }
    ],
    tags: [
      "Strawberry",
      "fresh",
    ],
    color: ['Black'],
    status: "publish",
    sold: 29,
    created_at: "2023-06-09T07:18:25.000000Z",
    updated_at: "2023-10-29T15:23:32.000000Z",
  },
  {
    id: 17,
    sku: "0017",
    title: "Thanh long hữu cơ tươi số 1 Việt Nam",
    price: 32000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-16.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Dragon Fruit',
    },
    brand: "Vons",
    quantity: 42,
    unit: '2kg',
    gallery: [
      "/assets/img/product/new/product-img-16.jpg",
      "/assets/img/product/new/product-img-16-thumb.jpg",
    ],
    description: "Thanh long hữu cơ tươi ngon, chất lượng số 1 Việt Nam. Thanh long có vị ngọt thanh, mọng nước, giàu vitamin và chất xơ. Sản phẩm được trồng hữu cơ, không sử dụng hóa chất. Tốt cho sức khỏe và làm đẹp. Được đóng gói cẩn thận.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2kg" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Def",
        comment: "Hoàn hảo",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Dragon",
      "Fruit",
    ],
    color: ['Red'],
    status: "publish",
    sold: 30,
    created_at: "2023-08-09T07:18:25.000000Z",
    updated_at: "2023-11-29T15:23:32.000000Z",
  },
  {
    id: 18,
    sku: "0018",
    title: "Lá chanh hữu cơ tươi USA 5kg",
    price: 11000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-17.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Lime Fruit',
    },
    brand: "Ralphs",
    quantity: 42,
    unit: '2kg',
    gallery: [
      "/assets/img/product/new/product-img-16.jpg",
      "/assets/img/product/new/product-img-16-thumb.jpg",
    ],
    description: "Lá chanh hữu cơ tươi ngon từ USA. Lá chanh có mùi thơm đặc trưng, thích hợp làm gia vị. Sản phẩm được trồng hữu cơ, đảm bảo an toàn. Có thể dùng để nấu ăn hoặc pha trà. Được đóng gói cẩn thận.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2kg" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Def",
        comment: "Hoàn hảo",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Lime",
      "Fruit",
    ],
    color: ['Pink'],
    status: "publish",
    sold: 32,
    created_at: "2023-10-09T07:18:25.000000Z",
    updated_at: "2023-10-29T15:23:32.000000Z",
  },
  {
    id: 19,
    sku: "0019",
    title: "Lá cải hữu cơ tươi Quaker Popped",
    price: 15000,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-18.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Apricot Fruit',
    },
    brand: "Ralphs",
    quantity: 47,
    unit: '4pc(s)',
    gallery: [
      "/assets/img/product/new/product-img-18.jpg",
      "/assets/img/product/new/product-img-18-thumb.jpg",
    ],
    description: "Lá cải hữu cơ tươi ngon, giòn mát. Rau được trồng theo phương pháp hữu cơ, không sử dụng hóa chất. Giàu vitamin và chất xơ, tốt cho sức khỏe. Thích hợp để nấu canh, xào hoặc làm salad. Được đóng gói cẩn thận.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Sản phẩm tươi ngon, chất lượng cao',
      'An toàn cho người ăn chay và dị ứng',
      'Đóng gói cẩn thận, bảo quản tốt'
    ],
    reviews: [
      {
        id: 1,
        name: "Christ",
        comment: "Tốt",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Apricot",
      "Fruit",
    ],
    color: ['Lime'],
    status: "publish",
    sold: 35,
    created_at: "2023-11-09T07:18:25.000000Z",
    updated_at: "2023-12-29T15:23:32.000000Z",
  },

  // 40 more vegetables (hết hàng, không hiển thị giá)
  ...Array.from({ length: 40 }, (_, idx) => {
    const id = 100 + idx;
    // Chọn tên rau và ảnh tương ứng từ danh sách (lặp lại nếu cần)
    const vegetableIdx = idx % outOfStockVegetableNames.length;
    const vegetableName = outOfStockVegetableNames[vegetableIdx];
    const vegetableNameWithSuffix = idx < outOfStockVegetableNames.length 
      ? vegetableName 
      : `${vegetableName} (${Math.floor(idx / outOfStockVegetableNames.length) + 1})`;
    // Lấy ảnh tương ứng với tên rau
    const imageObj = outOfStockVegetableImages[vegetableIdx];
    return {
      id,
      sku: `VRAU${100 + idx}`,
      title: `${vegetableNameWithSuffix} (Hết hàng)`,
      price: 0, // Price hidden via hidePrice flag
      image: {
        id: idx + 100,
        original: imageObj.original,
      },
      category: {
        parent: 'Vegetables',
        child: vegetableName,
      },
      brand: "Super Market",
      quantity: 0,
      unit: "1kg",
      gallery: [
        imageObj.original,
      ],
      description: `${vegetableNameWithSuffix} hết hàng. Chúng tôi sẽ bổ sung sớm nhất!`,
      videoId: null,
      additionalInfo: [
        { key: "Xuất xứ", value: "Việt Nam" },
        { key: "Tình trạng", value: "Hết hàng" },
      ],
      productInfoList: [
        "Sản phẩm hiện đang hết hàng",
        "Chỉ bán rau hữu cơ chất lượng",
        "Mọi thắc mắc xin liên hệ cửa hàng"
      ],
      reviews: [],
      tags: [
        "Vegetable",
        vegetableName,
        "Hết hàng",
      ],
      color: ["Green"],
      status: "out-of-stock",
      sold: 0,
      created_at: new Date(2024, 0, 1 + idx).toISOString(),
      updated_at: new Date(2024, 2, 1 + idx).toISOString(),
      banner: "Hết hàng",
      hidePrice: true,
    };
  })
]

export default product_data;