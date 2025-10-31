"use client";
import React,{useState} from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { IProductData } from "@/types/product-d-t";
import product_data from "@/data/product-data";
import { averageRating, isHot, formatPriceVND } from "@/utils/utils";
import ReviewForm from "../form/review-form";
import { Video } from "../svg";
import VideoPopup from "../common/modal/video-popup";
import ShopDetailsUpper from "./shop-details-upper";
import Link from "next/link";

// prop type
type IProps = {
  product: IProductData;
  navStyle?: boolean;
  topThumb?: boolean;
};
const ShopDetailsArea = ({ product,navStyle=false,topThumb=false }: IProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const {brand,category,gallery,reviews,price,color,quantity,tags,sale_price,description,additionalInfo,productInfoList,videoId} = product;
  const recent_products = [...product_data].slice(0, 2);
  return (
    <>
    <section className="shopdetails-area grey-bg pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div className="tpdetails__area mr-60 pb-30">
              {/* shop details upper */}
              <ShopDetailsUpper product={product} navStyle={navStyle} topThumb={topThumb}/>
              {/* shop details upper */}
              
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="tpsidebar pb-30">
              <div className="tpsidebar__warning mb-30">
                <ul>
                  <li>
                    <div className="tpsidebar__warning-item">
                      <div className="tpsidebar__warning-icon">
                        <i className="icon-package"></i>
                      </div>
                      <div className="tpsidebar__warning-text">
                        <p>
                          Miễn phí vận chuyển cho tất cả <br /> đơn hàng trên 2.000.000 VND
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpsidebar__warning-item">
                      <div className="tpsidebar__warning-icon">
                        <i className="icon-shield"></i>
                      </div>
                      <div className="tpsidebar__warning-text">
                        <p>
                          Đảm bảo 100% Hữu cơ <br /> từ trang trại thiên nhiên
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tpsidebar__banner mb-30">
                <Image
                  src="/assets/img/shape/sidebar-product-1.png"
                  alt="product-img"
                  width={270}
                  height={460}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tpsidebar__product">
                <h4 className="tpsidebar__title mb-15">Sản phẩm gần đây</h4>
                {recent_products.map((product) => (
                  <div key={product.id} className="tpsidebar__product-item">
                    <div className="tpsidebar__product-thumb p-relative">
                      <Image
                        src={product.image.original}
                        alt="product-img"
                        width={210}
                        height={210}
                      />
                      <div className="tpsidebar__info bage">
                       {isHot(product.updated_at) && (
                          <span className="tpproduct__info-hot bage__hot">HOT</span>
                        )}
                      </div>
                    </div>
                    <div className="tpsidebar__product-content">
                      <span className="tpproduct__product-category">
                        <Link href={`/shop-details/${product.id}`}>
                          {product.category.parent}
                        </Link>
                      </span>
                      <h4 className="tpsidebar__product-title">
                        <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
                      </h4>
                      <div className="tpproduct__rating mb-5">
                        <Rating
                          allowFraction
                          size={16}
                          initialValue={averageRating(reviews)}
                          readonly={true}
                        />
                      </div>

                      <div className={`tpproduct__price`}>
                        <span>{formatPriceVND(price)} </span>
                        {sale_price && <del>{formatPriceVND(sale_price)}</del>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

       {/* video modal start */}
       {videoId && <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />}
      {/* video modal end */}
    </>
  );
};

export default ShopDetailsArea;
