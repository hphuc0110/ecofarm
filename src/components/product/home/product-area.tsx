'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import product_data from '@/data/product-data';
import ProductSingle from '../product-single/product-single';

// slider setting
const slider_setting = {
   slidesPerView: 6,
   spaceBetween: 20,
   observer: true,
   observeParents: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
   },
   breakpoints: {
      '1200': {
         slidesPerView: 6,
      },
      '992': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   navigation: {
      nextEl: '.tpproduct-btn__nxt',
      prevEl: '.tpproduct-btn__prv',
   }
}

const ProductArea = () => {
   const products = [...product_data]
     .filter((p) => p.quantity > 0 && p.status !== "out-of-stock")
     .slice(-10);
  return (
    <>
     <section className="product-area grey-bg pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <div className="tpsection mb-35">
                        <h4 className="tpsection__sub-title">~ Special Products ~</h4>
                        <h4 className="tpsection__title">Sản phẩm đặc biệt</h4>
                        <p>Sản phẩm đặc biệt được chọn lọc từ những sản phẩm tốt nhất trên thị trường.</p>
                     </div>
                  </div>
               </div>
               <div className="tpproduct__arrow p-relative">
                  <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active tpslider-bottom p-relative">
                     {products.map((product, index) => (
                        <SwiperSlide key={index}>
                           <ProductSingle product={product} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="tpproduct-btn">
                     <div className="tpprduct-arrow tpproduct-btn__prv"><a href="#"><i className="icon-chevron-left"></i></a></div>
                     <div className="tpprduct-arrow tpproduct-btn__nxt"><a href="#"><i className="icon-chevron-right"></i></a></div>
                  </div>
               </div>
            </div>
         </section>
    </>
  );
};

export default ProductArea;