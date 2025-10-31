import React from "react";
import Image from "next/image";
import Link from "next/link";

// choose item
function ChooseItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="tpchoose__item text-center mb-30">
        <div className="tpchoose__icon mb-20">
          <Image
            src={`/assets/img/icon/choose-icon${icon}.svg`}
            width={65}
            height={65}
            alt="icon"
          />
        </div>
        <div className="tpchoose__content">
          <h4 className="tpchoose__title">{title}</h4>
          <p>
            Tuỳ chỉnh các tuỳ chọn giao diện tổng thể và xem thay đổi thiết kế
            tức thì.
          </p>
          <Link
            href="/about"
            className="tpchoose__details d-flex align-items-center justify-content-center"
          >
            tìm hiểu thêm<i className="icon-chevrons-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};

const ChooseArea = ({ style_2 = false }: IProps) => {
  return (
    <>
      <section
        className={`choose-area tpchoose__bg pb-80 ${style_2 ? "grey-bg" : ""}`}
        style={{ backgroundImage: "url(/assets/img/shape/choos-bg-1.svg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35 pt-75">
                <h4 className="tpsection__sub-title">
                  ~ Vì sao chọn chúng tôi? ~
                </h4>
                <h4 className="tpsection__title">
                  Điều gì làm chúng tôi khác biệt
                </h4>
                <p>
                  Chúng tôi mang đến những sự lựa chọn tối ưu để bạn và gia đình
                  luôn an tâm sử dụng.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <ChooseItem icon="1" title="100% Thực phẩm tươi mới" />
            <ChooseItem icon="2" title="Chất lượng cao cấp" />
            <ChooseItem icon="3" title="100% Tự nhiên" />
            <ChooseItem icon="4" title="100% Hữu cơ" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tpproduct__all-item text-center pt-15">
                <span>
                  Gần 1.400 nhân viên tận tâm của chúng tôi luôn sẵn sàng hỗ trợ
                  bạn.
                  <a href="#">
                    Trung tâm trợ giúp <i className="icon-chevrons-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
