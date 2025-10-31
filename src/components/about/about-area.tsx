import React from "react";
import Image from "next/image";
import about_img from "@/assets/img/shape/about-img-1.png";

// about item
export function AboutItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="tpabout__item text-center mb-40">
        <div className="tpabout__icon mb-15">
          <Image
            src={`/assets/img/icon/about-svg${icon}.svg`}
            alt="icon"
            width={64}
            height={64}
          />
        </div>
        <div className="tpabout__content">
          <h4 className="tpabout__title">{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};
const AboutArea = ({ style_2 = false }: IProps) => {
  return (
    <section className={`about-area ${style_2 ? "pb-35" : "pt-70"}`}>
      <div className="container">
        <div className={`${style_2 ? "" : "tpabout__border pb-35"}`}>
          {!style_2 && (
            <div className="row">
              <div className="col-md-12">
                <div className="tpabout__title-img text-center mb-45">
                  <Image className="mb-25" src={about_img} alt="about-img" />
                  <p>
                    Chúng tôi là chợ trực tuyến chuyên cung cấp rau củ quả tươi
                    sạch.
                    <br />
                    Bạn cũng có thể tìm thấy nước ép hữu cơ & đồ ăn lành mạnh,
                    thực phẩm chế biến <br />
                    cũng như các sản phẩm chăm sóc da dịu nhẹ tại cửa hàng của
                    chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <AboutItem
              icon="1"
              title="Chọn sản phẩm của bạn"
              subtitle="Lựa chọn các sản phẩm rau củ quả phù hợp để bắt đầu.<br/> Giữ nguyên, thêm hoặc bớt sản phẩm theo ý bạn."
            />
            <AboutItem
              icon="2"
              title="Cửa hàng Ecofam của chúng tôi"
              subtitle="Chúng tôi cung cấp hơn 100+ sản phẩm, <br/>đảm bảo dinh dưỡng đầy đủ cho gia đình bạn."
            />
            <AboutItem
              icon="3"
              title="Giao hàng tận nơi"
              subtitle="Giao hàng tận nhà cho bạn trong bán kính lên đến 100km<br/> và hoàn toàn miễn phí."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
