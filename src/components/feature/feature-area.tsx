import React from "react";
import Image from "next/image";

// prop type
type IFeatureProps = {
  img: string;
  title: string;
  subtitle: string;
  spacing?: string;
};
// feature
export function FeatureItem({
  img,
  title,
  subtitle,
  spacing = "30",
}: IFeatureProps) {
  return (
    <div className="col">
      <div className={`mainfeature__item text-center mb-${spacing}`}>
        <div className="mainfeature__icon">
          <Image
            src={`/assets/img/icon/feature-icon-${img}.svg`}
            alt="icon"
            width={25}
            height={25}
          />
        </div>
        <div className="mainfeature__content">
          <h4 className="mainfeature__title">{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
  bg_img?: boolean;
};

const FeatureArea = ({ style_2 = false, bg_img = true }: IProps) => {
  return (
    <section
      className={`feature-area mainfeature__bg ${style_2 ? "" : "grey-bg"} ${
        bg_img ? "" : "theme-bg-2"
      } pt-50 pb-40`}
      style={{
        backgroundImage: bg_img
          ? `url('/assets/img/shape/footer-shape-1.svg')`
          : "none",
      }}
    >
      <div className="container">
        <div className="mainfeature__border pb-15">
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
            <FeatureItem
              img="1"
              title="Giao hàng nhanh chóng"
              subtitle="Trên toàn khu vực miền Bắc & miền Nam"
            />
            <FeatureItem
              img="2"
              title="Thanh toán an toàn"
              subtitle="100% bảo mật khi thanh toán"
            />
            <FeatureItem
              img="3"
              title="Ưu đãi trực tuyến"
              subtitle="Nhận nhiều mức chiết khấu khi mua thêm"
            />
            <FeatureItem
              img="4"
              title="Trung tâm hỗ trợ"
              subtitle="Hỗ trợ tận tình 24/7"
            />
            <FeatureItem
              img="5"
              title="Sản phẩm được chọn lọc"
              subtitle="Từ các nhà bán hàng uy tín"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
