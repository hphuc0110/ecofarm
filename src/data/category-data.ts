import { ICategoryData } from "@/types/category-d-t";

const category_data:ICategoryData[] = [
  {
    id: 1,
    img: "/assets/img/catagory/category-1.jpg",
    name: "Rau củ",
    slug: "vegetables",
    parent: "Rau củ",
    children: [
      "Hành",
      "Chanh",
      "Kiwi",
      "Gừng",
      "Mơ",
      "Súp lơ",
      "Việt quất",
    ],
    product_id: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    img: "/assets/img/catagory/category-2.jpg",
    name: "Trái cây tươi",
    slug: "fresh-fruits",
    parent: "Trái cây tươi",
    children: [
      "Gà viên",
      "Chanh",
      "Nho thường",
      "Mận",
      "Măng cụt",
      "Chuối",
    ],
    product_id: [8, 9, 10, 11, 12, 13],
  },
  {
    id: 3,
    img: "/assets/img/catagory/category-3.jpg",
    name: "Đồ uống trái cây",
    slug: "fruit-drink",
    parent: "Đồ uống trái cây",
    children: [
      "Sữa",
      "Soda có ga"
    ],
    product_id: [14, 15, 16],
  },
  {
    id: 4,
    img: "/assets/img/catagory/category-4.jpg",
    name: "Bánh tươi",
    slug: "fresh-bakery",
    parent: "Bánh tươi",
    children: [
      "Dâu tây",
      "Thanh long",
      "Chanh dây",
      "Quả mơ"
    ],
    product_id: [17, 18, 19, 20],
  },
  {
    id: 5,
    img: "/assets/img/catagory/category-5.jpg",
    name: "Bánh quy & Snack",
    slug: "biscuits-snack",
    parent: "Bánh quy & Snack",
    children: [
      "Cơm giòn",
      "Kẹo Laffy Taffy"
    ],
    product_id: [21, 22],
  },
  {
    id: 6,
    img: "/assets/img/catagory/category-6.jpg",
    name: "Thịt tươi",
    slug: "fresh-meat",
    parent: "Thịt tươi",
    children: [
      "Thịt bò",
      "Gà",
      "Thịt"
    ],
    product_id: [23, 24, 25],
  },
  {
    id: 7,
    img: "/assets/img/catagory/category-7.jpg",
    name: "Sữa tươi",
    slug: "fresh-milk",
    parent: "Sữa tươi",
    children: [
      "Sữa",
    ],
    product_id: [26],
  },
  {
    id: 8,
    img: "/assets/img/catagory/category-8.jpg",
    name: "Hải sản",
    slug: "sea-foods",
    parent: "Hải sản",
    children: [
 
    ],
    product_id: [],
  }
];

export default category_data;
