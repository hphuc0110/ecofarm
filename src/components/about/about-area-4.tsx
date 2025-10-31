import React from "react";
import Image from "next/image";
import about_inner from "@/assets/img/banner/about-inner-bg.png";
import shape_1 from "@/assets/img/shape/tree-leaf-6.png";
import shape_2 from "@/assets/img/shape/tree-leaf-7.png";

const AboutAreaFour = () => {
  return (
    <section className="about-area pt-100 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tpabout__inner-thumb-2 p-relative mb-30">
              <Image
                src={about_inner}
                alt="about-img"
                style={{ height: "auto" }}
              />
              <div className="tpabout__inner-thumb-shape d-none d-md-block">
                <div className="tpabout__inner-thumb-shape-one">
                  <Image src={shape_1} alt="shape" />
                </div>
                <div className="tpabout__inner-thumb-shape-two">
                  <Image src={shape_2} alt="shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tpabout__inner-2 mb-30">
              <div className="tpabout__inner-tag mb-10">
                <span className="active">Về chúng tôi</span>
                <span>Chào mừng đến với Ecofarm</span>
              </div>
              <h3 className="tpabout__inner-title-2 mb-25">
                Chúng tôi giúp <br />
                doanh nghiệp số của bạn phát triển
              </h3>
              <p>
                Chúng tôi cung cấp dịch vụ trải nghiệm số cho các startup và
                doanh nghiệp nhỏ. <br />
                Chúng tôi giúp khách hàng thành công bằng cách tạo dựng thương
                hiệu, trải nghiệm số, <br />
                và vật liệu in ấn. Sed trspiciatis unde omnis iste natus error
                sit voluptatem accusantium.
              </p>
              <div className="tpabout__inner-list">
                <ul>
                  <li>
                    <i className="icon-check"></i> Theo dõi hoạt động hàng ngày
                    của bạn.
                  </li>
                  <li>
                    <i className="icon-check"></i> Bắt đầu cuộc gọi video nhóm
                    riêng tư.
                  </li>
                  <li>
                    <i className="icon-check"></i> Tất cả các công cụ sinh Lorem
                    Ipsum trên Internet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaFour;
