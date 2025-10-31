import React from "react";
import Image, { StaticImageData } from "next/image";
import about_1 from "@/assets/img/about/about-1.png";
import about_2 from "@/assets/img/about/about-2.png";
import about_3 from "@/assets/img/about/about-3.png";

// about item
function AboutItem({ img, title }: { img: StaticImageData; title: string }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="img-box__wrapper text-center mb-30">
        <div className="img-box__thumb mb-30">
          <Image src={img} alt="img" />
        </div>
        <div className="img-box__content">
          <h4 className="img-box__title mb-10">{title}</h4>
        </div>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};

const AboutAreaThree = ({ style_2 = false }: IProps) => {
  return (
    <section className={`img-box-area ${style_2 ? "grey-bg pt-80 pb-50" : ""}`}>
      <div className="container">
        {style_2 && (
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">
                  ~ Vì sao chọn chúng tôi ~
                </h4>
                <h4 className="tpsection__title">
                  Công Việc Tuyệt Vời Của Chúng Tôi
                </h4>
                <p>
                  Chúng tôi luôn nỗ lực mang đến giá trị tốt nhất cho khách
                  hàng, với những lựa chọn và giải pháp tối ưu.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <AboutItem img={about_1} title={"Chúng tôi là ai"} />
          <AboutItem img={about_2} title={"Sản phẩm của chúng tôi"} />
          <AboutItem img={about_3} title={"Cách chúng tôi hoạt động"} />
        </div>
      </div>
    </section>
  );
};

export default AboutAreaThree;
