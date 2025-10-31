import React from "react";

const CheckoutOrder = () => {
  return (
    <>
      <div className="accordion" id="checkoutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="checkoutOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bankOne"
              aria-expanded="true"
              aria-controls="bankOne"
            >
              Chuyển khoản ngân hàng trực tiếp
            </button>
          </h2>
          <div
            id="bankOne"
            className="accordion-collapse collapse show"
            aria-labelledby="checkoutOne"
            data-bs-parent="#checkoutAccordion"
          >
            <div className="accordion-body">
              Vui lòng chuyển khoản trực tiếp đến tài khoản ngân hàng của chúng
              tôi. Hãy sử dụng Mã đơn hàng làm nội dung thanh toán. Đơn hàng của
              bạn sẽ không được giao cho đến khi chúng tôi nhận được tiền.
            </div>
          </div>
        </div>
      </div>
      <div className="order-button-payment mt-20">
        <button
          type="submit"
          className="tp-btn tp-color-btn w-100 banner-animation"
        >
          Đặt hàng
        </button>
      </div>
    </>
  );
};

export default CheckoutOrder;
