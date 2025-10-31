"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// internal
import shape_1 from "@/assets/img/shape/tree-leaf-4.svg";
import shape_2 from "@/assets/img/shape/tree-leaf-5.svg";
import shape_3 from "@/assets/img/shape/tree-leaf-6.png";

// slider setting
export const slider_setting = {
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".tptestimonial__nxt",
    prevEl: ".tptestimonial__prv",
  },
};

// testimonial data
export const testimonial_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/ly-quoc-binh.webp",
    desc: `"Ban đầu tôi khá tò mò về Blind Box rau 50K của Eco Farm Hải Dương, không biết bên trong có gì. Ai dè lần nào cũng bất ngờ! Có hôm tôi nhận được cả măng tây, hôm khác lại là bắp cải tím với cà chua bi, giá trị luôn cao hơn 50K rất nhiều. Rau củ thì khỏi phải bàn, tươi roi rói như vừa hái ở vườn. Cái cảm giác mỗi sáng 'đập hộp' để xem hôm nay mình sẽ nấu gì thú vị lắm. Đây đúng là một trải nghiệm độc đáo và tiết kiệm mà tôi rất thích, giờ cứ 9h sáng là tôi lại canh để săn box."`,
    name: " Anh Trần Văn Hùng",
    position: "Freelancer Designer",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/le-minh-hanh.webp",
    desc: `"Trước đây mỗi chiều tan làm, tôi lại đau đầu nghĩ xem tối nay ăn gì và phải tranh thủ ghé siêu thị. Từ ngày đăng ký gói An Tâm 500 của Eco Farm Hải Dương, mọi thứ trở nên nhẹ nhàng hơn rất nhiều. Sáng thứ Hai là có ngay một thùng rau tươi rói giao đến tận cửa, đủ loại rau ăn lá, rau củ cho cả tuần. Rau lúc nào cũng tươi ngon, sạch sẽ, có mã QR truy xuất nguồn gốc rõ ràng nên tôi rất yên tâm khi chế biến cho cả gia đình, đặc biệt là các con nhỏ. Đúng là giải pháp hoàn hảo cho mẹ bận rộn!"`,
    name: "Chị Nguyễn Thị Mai Linh",
    position: "Trưởng phòng Marketing",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/thu-hang.jpg",
    desc: `"Mấy tháng nay tôi cảm thấy cơ thể hơi trì trệ và muốn tìm cách thanh lọc nhẹ nhàng. Thấy Eco Farm Hải Dương có chương trình Detox mua 5 tặng 2, tôi rủ thêm cô bạn thân mua chung để thử. Nước ép ở đây rất tươi, vị tự nhiên và không hề có cảm giác pha chế. Sau 5 ngày uống liên tục, tôi thấy da sáng hơn, cơ thể nhẹ nhàng và đặc biệt là ngủ ngon hơn rất nhiều. Dịch vụ tư vấn cũng rất nhiệt tình, giải đáp mọi thắc mắc của chúng tôi. Chắc chắn tôi sẽ quay lại và giới thiệu cho bạn bè nữa!"`,
    name: "Chị Lê Thị Thùy Dung",
    position: " Chủ cửa hàng thời trang",
  },
];

const TestimonialAreaTwo = () => {
  return (
    <>
      <section
        className="testimonial-area tptestimonial__bg pt-115 pb-120 p-relative"
        style={{
          backgroundImage: "url(/assets/img/testimonial/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="testimonial__shape p-relative d-none d-md-block">
            <Image
              src={shape_1}
              alt="shape"
              className="testimonial__shape-one"
            />
            <Image
              src={shape_2}
              alt="shape"
              className="testimonial__shape-two"
            />
            <Image
              src={shape_3}
              alt="shape"
              className="testimonial__shape-three"
            />
          </div>
          <Swiper
            {...slider_setting}
            modules={[Navigation]}
            className="swiper-container tptestimonial-active2 p-relative"
          >
            {testimonial_data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="row justify-content-center p-relative">
                  <div className="col-md-12">
                    <div className="tptestimonial__item text-center ">
                      <div className="tptestimonial__avata mb-25">
                        <Image
                          src={item.user}
                          width={70}
                          height={70}
                          alt="user"
                        />
                      </div>
                      <div className="tptestimonial__content tptestimonial__content2">
                        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                        <div className="tptestimonial__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <h4 className="tptestimonial__title">{item.name}</h4>
                        <span className="tptestimonial__avata-position">
                          {item.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="tptestimonial-arrow d-none d-md-block">
          <button className="testi-arrow tptestimonial__prv">
            <i className="icon-chevron-left"></i>
          </button>
          <button className="testi-arrow tptestimonial__nxt">
            <i className="icon-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaTwo;
