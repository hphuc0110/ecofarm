"use client";
import React from "react";
import blog_data from "@/data/blog-data";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSingle from "./single/blog-single";
import Link from "next/link";

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

// prop type
type IProps = {
  style_2?: boolean;
  bottom_show?: boolean;
  spacing?: string;
};

const BlogItems = ({style_2=false,bottom_show=true,spacing}: IProps) => {
  const blogs = blog_data.filter((blog) => blog.blog === "home");
  return (
    <>
      <section
        className={`blog-area ${spacing?spacing:"pt-100 pb-100 grey-bg"}`}
      >
        <div className="container">
          {!style_2 && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Đọc Blog Của Chúng Tôi ~</h4>
                  <h4 className="tpsection__title">Bài Viết Mới Nhất</h4>
                  <p>
                    Các bài viết mới nhất về thực phẩm tươi ngon, lối sống lành mạnh
                    và những mẹo hay cho cuộc sống của bạn.
                  </p>
                </div>
              </div>
            </div>
          )}
          {style_2 && (
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <div className="tpsection mb-15">
                  <h4 className="tpsection__title text-start brand-product-title">
                    Tin Tức Mới Nhất
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tpproduct__all-item">
                  <Link href="/blog">
                    Xem Tất Cả <i className="icon-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Swiper
            {...slider_setting}
            className="swiper-container tpblog-active"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogSingle blog={blog} bottom_show={bottom_show} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BlogItems;
