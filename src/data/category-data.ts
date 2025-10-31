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
];

export default category_data;
