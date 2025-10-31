import { IMenuData } from "@/types/menu-d-t";

const menu_data:IMenuData[] = [
  {
    id:1,
    name:'Cửa hàng',
    link:'/shop',
    has_dropdown:false,
  },
  {
    id:2,
    name:'Blog',
    link:'/blog',
    has_dropdown:false,
  },
  {
    id:3,
    name:'Về chúng tôi',
    link:'/about',
    has_dropdown:false,
  },
]

export default menu_data;

// mobile menus 
export const mobile_menus = [
  {
    id:1,
    name:'Cửa hàng',
    link:'/shop',
    has_dropdown:false,

  },
  {
    id:2,
    name:'Blog',
    link:'/blog',
    has_dropdown:false,
  },
  {
    id:3,
    name:'Về chúng tôi',
    link:'/about',
    has_dropdown:false,
  },
]