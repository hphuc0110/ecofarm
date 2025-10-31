"use client";
import React, { useState } from "react";

const CouponArea = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openCoupon, setOpenCoupon] = useState<boolean>(false);
  return (
    <section className="coupon-area pt-10 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Khách hàng đã mua trước?{" "}
                <span id="showlogin" onClick={() => setOpenLogin(!openLogin)}>
                  Nhấn vào đây để đăng nhập
                </span>
              </h3>
              {openLogin && (
                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                    <p className="coupon-text">
                      Vui lòng đăng nhập để tiếp tục quá trình thanh toán. Nếu
                      bạn đã có tài khoản, hãy nhập thông tin bên dưới.
                    </p>
                    <form action="#">
                      <p className="form-row-first">
                        <label>
                          Tên đăng nhập hoặc email{" "}
                          <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row-last">
                        <label>
                          Mật khẩu <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row">
                        <button className="tp-btn tp-color-btn" type="submit">
                          Đăng nhập
                        </button>
                        <label>
                          <input type="checkbox" />
                          Ghi nhớ đăng nhập
                        </label>
                      </p>
                      <p className="lost-password">
                        <a href="#">Quên mật khẩu?</a>
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Có mã giảm giá?{" "}
                <span
                  id="showcoupon"
                  onClick={() => setOpenCoupon(!openCoupon)}
                >
                  Nhấn vào đây để nhập mã
                </span>
              </h3>
              {openCoupon && (
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form action="#">
                      <p className="checkout-coupon">
                        <input type="text" placeholder="Nhập mã giảm giá" />
                        <button className="tp-btn tp-color-btn" type="submit">
                          Áp dụng mã giảm giá
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponArea;
