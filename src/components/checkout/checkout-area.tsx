"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckoutOrder from "./checkout-order";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getCartProducts } from "@/redux/features/cart";
import Link from "next/link";
import ErrorMsg from "../common/error-msg";
import useCartInfo from "@/hooks/use-cart-info";

// type form data

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  city: string;
  apartment: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  orderNote?: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  company: yup.string().required().label("Company"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  apartment: yup.string().required().label("Apartment"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("Zip Code"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  orderNote: yup.string().label("Order Note"),
});

const CheckoutArea = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { total } = useCartInfo();
  const [shipCost, setShipCost] = useState<number | string>(7.0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCartProducts());
    }
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    reset();
  });
  return (
    <section className="checkout-area pb-50">
      <div className="container">
        {cart_products.length === 0 && (
          <div className="text-center pt-100">
            <h3>Giỏ hàng của bạn đang trống</h3>
            <Link href="/shop" className="tp-btn-2 mt-10">
              Quay lại cửa hàng
            </Link>
          </div>
        )}
        {cart_products.length > 0 && (
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="checkbox-form">
                  <h3>Thông tin thanh toán</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Quốc gia <span className="required">*</span>
                        </label>
                        <select id="country" {...register("country")}>
                          <option defaultValue="united-states">Hoa Kỳ</option>
                          <option defaultValue="algeria">Algeri</option>
                          <option defaultValue="canada">Canada</option>
                          <option defaultValue="germany">Đức</option>
                          <option defaultValue="england">Anh</option>
                          <option defaultValue="qatar">Qatar</option>
                          <option defaultValue="dominican-republic">
                            Cộng hòa Dominica
                          </option>
                        </select>
                        <ErrorMsg msg={errors.country?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Họ <span className="required">*</span>
                        </label>
                        <input
                          id="firstName"
                          {...register("firstName")}
                          type="text"
                          placeholder="Họ"
                        />
                        <ErrorMsg msg={errors.firstName?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Tên <span className="required">*</span>
                        </label>
                        <input
                          id="lastName"
                          {...register("lastName")}
                          type="text"
                          placeholder="Tên"
                        />
                        <ErrorMsg msg={errors.lastName?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Tên công ty</label>
                        <input
                          id="company"
                          {...register("company")}
                          type="text"
                          placeholder="Tên công ty"
                        />
                        <ErrorMsg msg={errors.company?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Địa chỉ <span className="required">*</span>
                        </label>
                        <input
                          id="address"
                          {...register("address")}
                          type="text"
                          placeholder="Địa chỉ đường"
                        />
                        <ErrorMsg msg={errors.address?.message!} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          id="apartment"
                          {...register("apartment")}
                          type="text"
                          placeholder="Căn hộ, dãy, đơn vị v.v. (tùy chọn)"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Thành phố / Thị xã <span className="required">*</span>
                        </label>
                        <input
                          id="city"
                          {...register("city")}
                          type="text"
                          placeholder="Thành phố / Thị xã"
                        />
                        <ErrorMsg msg={errors.city?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Tỉnh / Huyện <span className="required">*</span>
                        </label>
                        <input
                          id="state"
                          {...register("state")}
                          type="text"
                          placeholder="Tỉnh/Bang"
                        />
                        <ErrorMsg msg={errors.state?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Mã bưu điện / Zip <span className="required">*</span>
                        </label>
                        <input
                          id="zipCode"
                          {...register("zipCode")}
                          type="text"
                          placeholder="Mã bưu điện / Zip"
                        />
                        <ErrorMsg msg={errors.zipCode?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Địa chỉ Email <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <ErrorMsg msg={errors.email?.message!} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Số điện thoại <span className="required">*</span>
                        </label>
                        <input
                          id="phone"
                          {...register("phone")}
                          type="text"
                          placeholder="Số điện thoại"
                        />
                        <ErrorMsg msg={errors.phone?.message!} />
                      </div>
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Ghi chú đơn hàng</label>
                        <textarea
                          id="orderNote"
                          {...register("orderNote")}
                          cols={30}
                          rows={10}
                          placeholder="Ghi chú về đơn hàng của bạn, ví dụ: yêu cầu đặc biệt cho giao hàng."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="your-order mb-30 ">
                  <h3>Đơn hàng của bạn</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Sản phẩm</th>
                          <th className="product-total">Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart_products &&
                          cart_products.map((product) => (
                            <tr className="cart_item" key={product.id}>
                              <td className="product-name">
                                {product.title}{" "}
                                <strong className="product-quantity">
                                  × {product.orderQuantity}
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">
                                  $
                                  {product.sale_price
                                    ? product.sale_price.toFixed(2)
                                    : product.price.toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Tạm tính</th>
                          <td>
                            <span className="amount">${total.toFixed(2)}</span>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Vận chuyển</th>
                          <td>
                            <ul>
                              <li>
                                <input
                                  onChange={() => setShipCost(7.0)}
                                  checked={shipCost === 7.0}
                                  type="radio"
                                  id="shipping"
                                  name="shipping"
                                />
                                <label htmlFor="shipping">
                                  Giá cố định:{" "}
                                  <span className="amount">$7.00</span>
                                </label>
                              </li>
                              <li>
                                <input
                                  id="free-shipping"
                                  onChange={() => setShipCost("free")}
                                  type="radio"
                                  name="shipping"
                                />
                                <label htmlFor="free-shipping">
                                  Miễn phí vận chuyển:
                                </label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng cộng</th>
                          <td>
                            <strong>
                              <span className="amount">
                                $
                                {typeof shipCost === "number"
                                  ? (total + shipCost).toFixed(2)
                                  : total.toFixed(2)}
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    {/* Checkout Order */}
                    <CheckoutOrder />
                    {/* Checkout Order */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CheckoutArea;
