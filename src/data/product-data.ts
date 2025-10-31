import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 1,
    sku: "001",
    title: "Hành tím/ Hành tây/ Hành khô Kinh men 1kg",
    price: 20,
    sale_price: 18,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-1.jpg",
      thumbnail: "/assets/img/product/new/product-img-1-thumb.jpg",
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
  {
    id: 2,
    sku: "002",
    title: "Chanh tươi chua ngọt tự nhiên",
    price: 25,
    sale_price: 22,
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
    price: 25,
    sale_price: 24,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-3.jpg",
      thumbnail: "/assets/img/product/new/product-img-3-thumb.jpg",
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
    price: 30,
    sale_price: 27,
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
    price: 35,
    sale_price: 30,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-5.jpg",
      thumbnail: "/assets/img/product/new/product-img-5-thumb.jpg",
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
    price: 10,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-6.jpg",
      thumbnail: "/assets/img/product/new/product-img-6-thumb.jpg",
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
    price: 38,
    sale_price: 35,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-7.jpg",
      thumbnail: "/assets/img/product/new/product-img-7-thumb.jpg",
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
    id: 8,
    sku: "008",
    title: "Túi hàng tươi sống chất lượng cao 100%",
    price: 42,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-8.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Chicken Tenders',
    },
    brand: "Aldi",
    quantity: 20,
    unit: '4pc(s)',
    description: "Túi hàng tươi sống chất lượng cao, đảm bảo an toàn. Sản phẩm được chọn lọc kỹ càng từ các nguồn uy tín. Đóng gói cẩn thận để giữ độ tươi ngon. Phù hợp cho nhiều món ăn khác nhau. Cam kết chất lượng tốt nhất.",
    videoId: null,
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
        name: "Smith",
        comment: "Tốt",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "25 June, 2023",
      }
    ],
    tags: [
      "chicken",
      "fresh",
    ],
    color: ['Silver'],
    status: "publish",
    sold: 8,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 9,
    sku: "009",
    title: "Chanh tươi chua ngọt tự nhiên",
    price: 25,
    sale_price: 22,
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
    price: 21,
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
    price: 26,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-10.jpg",
      thumbnail: "/assets/img/product/new/product-img-10-thumb.jpg",
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
    price: 30,
    sale_price: 15,
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
    title: "Snack chuối hữu cơ ngọt ngào",
    price: 20,
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
    id: 14,
    sku: "0014",
    title: "Sữa tươi sô cô la Quaker Popped Rice Crisps",
    price: 19,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-13.jpg",
      thumbnail: "/assets/img/product/new/product-img-13-thumb.jpg",
    },
    category: {
      parent: 'Fruit Drink',
      child: 'Milk',
    },
    brand: "Vons",
    gallery: [
      "/assets/img/product/new/product-img-13.jpg",
      "/assets/img/product/new/product-img-13-thumb.jpg",
    ],
    quantity: 40,
    unit: '2lb',
    description: "Sữa tươi sô cô la thơm ngon, bổ dưỡng. Sản phẩm được làm từ sữa tươi chất lượng cao. Giàu canxi và protein, tốt cho sức khỏe. Vị ngọt vừa phải, không quá ngọt. Được đóng gói cẩn thận để giữ chất lượng.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2lb" },
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
        name: "Zack",
        comment: "Tốt",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Milk",
      "fresh",
    ],
    color: ['Gold'],
    status: "publish",
    sold: 21,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },
  {
    id: 15,
    sku: "0015",
    title: "Nước có ga Soda (Màu hồng vàng)",
    price: 65,
    sale_price: 55,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-14.jpg"
    },
    category: {
      parent: 'Fruit Drink',
      child: 'Soda Sparkling',
    },
    brand: "Vons",
    quantity: 40,
    unit: '1lb',
    description: "Nước có ga Soda mát lạnh, sảng khoái. Sản phẩm có vị ngọt thanh, mát lạnh, thích hợp giải khát. Không chứa calo, phù hợp cho người ăn kiêng. Được đóng chai cẩn thận, đảm bảo chất lượng.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
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
        name: "Zack",
        comment: "Tốt",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "soda",
      "sparkling",
      "fresh",
    ],
    color: ['Navy'],
    status: "publish",
    sold: 27,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },

  {
    id: 16,
    sku: "0016",
    title: "Chuối đẹp da, tốt cho sức khỏe 1Kg",
    price: 20,
    sale_price: 19,
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
    price: 32,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-16.jpg",
      thumbnail: "/assets/img/product/new/product-img-16-thumb.jpg",
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
    price: 31,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-17.jpg",
      thumbnail: "/assets/img/product/new/product-img-17-thumb.jpg",
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
    price: 54,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-18.jpg",
      thumbnail: "/assets/img/product/new/product-img-18-thumb.jpg",
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

  {
    id: 20,
    sku: "0020",
    title: "Snack Quaker Popped Rice Crisps sô cô la",
    price: 33,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-19.jpg"
    },
    category: {
      parent: 'Biscuits Snack',
      child: 'Rice Crisps',
    },
    brand: "Ralphs",
    quantity: 53,
    unit: '5pc(s)',
    description: "Snack Quaker Popped Rice Crisps sô cô la giòn tan. Sản phẩm được làm từ gạo nguyên chất, vị sô cô la ngọt ngào. Không chứa chất bảo quản độc hại. Thích hợp làm món ăn vặt bổ dưỡng. Được đóng gói cẩn thận.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
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
        name: "Ursula",
        comment: "Tốt",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Rice",
      "Crisps",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 15,
    created_at: "2023-09-11T07:18:25.000000Z",
    updated_at: "2023-11-20T15:23:32.000000Z",
  },
  {
    id: 21,
    sku: "0021",
    title: "Kẹo Laffy Taffy Laff Bites chuối – 4 Gói",
    price: 55,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-20.jpg"
    },
    category: {
      parent: 'Biscuits Snack',
      child: 'Laffy Taffy',
    },
    brand: "ShopRite",
    quantity: 55,
    unit: '5pc(s)',
    description: "Kẹo Laffy Taffy Laff Bites vị chuối thơm ngon. Kẹo có vị ngọt thanh, dai mềm, thơm mùi chuối tự nhiên. Sản phẩm không chứa chất bảo quản độc hại. Thích hợp cho trẻ em và người lớn. Được đóng gói cẩn thận.",
    videoId: null,
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
        name: "Ursula",
        comment: "Tốt",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Laffy Taffy",
      "Snacks",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 20,
    created_at: "2023-09-11T07:18:25.000000Z",
    updated_at: "2023-11-20T15:23:32.000000Z",
  },

  {
    id: 22,
    sku: "0022",
    title: "Thịt bò Angus hầm chất lượng cao USDA – 1Kg",
    price: 120,
    sale_price: 100,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-21.jpg"
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Beef',
    },
    brand: "ShopRite",
    quantity: 55,
    unit: '2Kg',
    description: "Thịt bò Angus chất lượng cao từ USDA. Thịt tươi ngon, mềm, giàu protein và chất dinh dưỡng. Phù hợp để hầm, nấu súp hoặc các món ăn khác. Được đóng gói và bảo quản cẩn thận. Đảm bảo an toàn vệ sinh thực phẩm.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2Kg" },
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
        name: "Ursula",
        comment: "Tốt",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Beef",
      "Fresh",
    ],
    color: ['White'],
    status: "publish",
    sold: 11,
    created_at: "2023-08-12T07:18:25.000000Z",
    updated_at: "2023-09-13T15:23:32.000000Z",
  },
  {
    id: 23,
    sku: "0023",
    title: "Gà tươi ngon, giá tốt",
    price: 150,
    sale_price: 120,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-22.jpg",
      thumbnail: "/assets/img/product/new/product-img-22-thumb.jpg",
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Chicken',
    },
    brand: "ShopRite",
    quantity: 62,
    unit: '2Kg',
    gallery: [
      "/assets/img/product/new/product-img-22.jpg",
      "/assets/img/product/new/product-img-22-thumb.jpg",
    ],
    description: "Gà tươi ngon, chất lượng cao. Thịt gà mềm, thơm, giàu protein. Sản phẩm được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh. Phù hợp để nấu nhiều món ăn ngon. Được đóng gói và bảo quản cẩn thận.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2Kg" },
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
        name: "Iris",
        comment: "Khá tốt",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "14 June, 2023",
      }
    ],
    tags: [
      "Chicken",
      "Fresh",
    ],
    status: "publish",
    color: ['Lime'],
    sold: 9,
    created_at: "2023-05-12T07:18:25.000000Z",
    updated_at: "2023-07-14T15:23:32.000000Z",
  },
  {
    id: 24,
    sku: "0024",
    title: "Thịt tươi chất lượng số 1 từ USA 500g",
    price: 80,
    sale_price: 70,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-23.jpg",
      thumbnail: "/assets/img/product/new/product-img-23-thumb.jpg",
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Meat',
    },
    brand: "ShopRite",
    quantity: 30,
    unit: '500gm',
    gallery: [
      "/assets/img/product/new/product-img-23.jpg",
      "/assets/img/product/new/product-img-23-thumb.jpg",
    ],
    description: "Thịt tươi chất lượng số 1 từ USA. Thịt mềm, thơm, giàu protein và chất dinh dưỡng. Sản phẩm được kiểm định chất lượng nghiêm ngặt. Phù hợp để nấu nhiều món ăn ngon. Được đóng gói và bảo quản cẩn thận.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "500gm" },
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
        name: "Iris",
        comment: "Khá tốt",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "7 June, 2023",
      }
    ],
    tags: [
      "Meat",
      "Fresh",
    ],
    status: "publish",
    color: ['Indigo'],
    sold: 7,
    created_at: "2023-06-18T07:18:25.000000Z",
    updated_at: "2023-07-19T15:23:32.000000Z",
  },

  {
    id: 25,
    sku: "0025",
    title: "Sữa tươi sô cô la Quaker Popped Rice Crisps",
    price: 19,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-13.jpg",
      thumbnail: "/assets/img/product/new/product-img-13-thumb.jpg",
    },
    category: {
      parent: 'Fresh Milk',
      child: 'Milk',
    },
    brand: "ShopRite",
    gallery: [
      "/assets/img/product/new/product-img-13.jpg",
      "/assets/img/product/new/product-img-13-thumb.jpg",
    ],
    quantity: 40,
    unit: '2lb',
    description: "Sữa tươi sô cô la thơm ngon, bổ dưỡng. Sản phẩm được làm từ sữa tươi chất lượng cao. Giàu canxi và protein, tốt cho sức khỏe. Vị ngọt vừa phải, không quá ngọt. Được đóng gói cẩn thận để giữ chất lượng.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2lb" },
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
        name: "Zack",
        comment: "Tốt",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Milk",
      "fresh",
    ],
    color: ['Cyan'],
    status: "publish",
    sold: 26,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },
]

export default product_data;