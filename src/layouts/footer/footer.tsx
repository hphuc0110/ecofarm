import React from "react";
import Image from "next/image";
import social_links from "@/data/social-data";

// prop type
type IProps = {
  style_2?: boolean;
};

const Footer = ({ style_2 = false }: IProps) => {
  return (
    <footer>
      <div
        className={`tpfooter__area theme-bg-2 ${
          style_2 ? "pt-55 footer-border" : ""
        }`}
      >
        <div className="tpfooter__top pb-15">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tpfooter__widget footer-col-1 mb-50">
                  <h4 className="tpfooter__widget-title">
                    Chúng tôi có thể giúp gì cho bạn?
                  </h4>
                  <p>
                    Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng <br /> liên hệ
                    với chúng tôi tại:{" "}
                    <a href="mailto:support@example.com">
                      info@ecofarmhaiduong.com
                    </a>
                  </p>
                  <div className="tpfooter__widget-social mt-45">
                    <span className="tpfooter__widget-social-title mb-5">
                      Mạng xã hội:
                    </span>
                    {social_links.map((s, i) => (
                      <a href={s.link} target="_blank" key={i}>
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                <div className="tpfooter__widget footer-col-2 mb-50">
                  <h4 className="tpfooter__widget-title">Tìm kiếm Ecofam?</h4>
                  <p>Địa chỉ: Phạm Trấn, Gia Lộc, Hải Dương</p>
                  <p>
                    Văn Phòng Đại diện: 9 Vũ Phạm Hàm, Yên Hoà, Cầu Giấy Hà Nội
                  </p>
                  <p>(+84) 906 792 008</p>
                  <div className="tpfooter__widget-time-info mt-35">
                    <span>
                      Thứ 2 – Thứ 6: <b>8:10 - 18:10</b>
                    </span>
                    <span>
                      Thứ 7: <b>10:10 - 18:10</b>
                    </span>
                    <span>
                      Chủ nhật: <b>Đóng cửa</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                <div className="tpfooter__widget footer-col-4 mb-50">
                  <h4 className="tpfooter__widget-title">
                    Bản tin của chúng tôi
                  </h4>
                  <div className="tpfooter__widget-newsletter">
                    <p>
                      Đăng ký nhận bản tin Ecofam để nhận cập nhật <br /> về
                      hàng mới & thông tin khác.
                    </p>
                    <form>
                      <span>
                        <i>
                          <Image
                            src="/assets/img/shape/message-1.svg"
                            alt="icon"
                            width={18}
                            height={15}
                          />
                        </i>
                      </span>
                      <input
                        type="email"
                        placeholder="Địa chỉ email của bạn..."
                      />
                      <button className="tpfooter__widget-newsletter-submit tp-news-btn">
                        Đăng ký
                      </button>
                    </form>
                    <div className="tpfooter__widget-newsletter-check mt-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Tôi đồng ý với điều khoản sử dụng & chính sách bảo
                          mật.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpfooter___bottom pt-40 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-sm-12">
                <div className="tpfooter__copyright">
                  <span className="tpfooter__copyright-text">
                    Bản quyền © <a href="#">Ecofam</a> bảo lưu mọi quyền.
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-12">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
