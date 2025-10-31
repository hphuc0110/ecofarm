import React from "react";
import Image from "next/image";
import CategoryFilter from "./filter/category-filter";

// prop type 
type IProps = {
  shop_right?: boolean;
}

const ShopSidebar = ({shop_right}: IProps) => {
  return (
    <div>
      <div className={`tpshop__leftbar ${shop_right?'tpshop__leftbar-area':''}`}>
        {/* category filter start */}
        <CategoryFilter />
      </div>
      <div className={`tpshop__widget ${shop_right?'tpshop__leftbar-area':''}`}>
        <div className="tpshop__sidbar-thumb mt-35">
          <Image src="/assets/img/shape/sidebar-product-1.png" alt="img" width={270} height={460} style={{height: 'auto'}} />
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
