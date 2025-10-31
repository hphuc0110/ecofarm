import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBlogData } from '@/types/blog-d-t';
import details_sm_1 from '@/assets/img/blog/blog-details-sm-1.jpg';
import details_sm_2 from '@/assets/img/blog/blog-details-sm-2.jpg';
import details_sm_3 from '@/assets/img/blog/blog-details-sm-3.jpg';
import author from '@/assets/img/blog/blog-details-author.jpg';
import BlogDetailsForm from '@/components/form/blog-details-form';
import BlogDetailsComments from './blog-details-comments';

// prop type 
type IProps = {
  blog: IBlogData;
}

const BlogDetailsArea = ({blog}: IProps) => {
  return (
    <section className="blog-details-area pb-50">
    <div className="container">
       <div className="row">
          <div className="col-lg-12">
             <div className="tp-blog-details__thumb">
                <Image src={blog.image} alt="" width={1410} height={882} style={{ height: "auto", width: "100%" }}/>
             </div>
          </div>
       </div>
       <div className="row">
          <div className="col-xl-10 col-lg-12">
             <div className="tp-blog-details__wrapper">
                <div className="tp-blog-details__content">
                   <div className="tpblog__entry-wap mb-5">
                      <span className="cat-links"><a href="#">{blog.category}</a></span>
                      <span className="author-by"><a href="#">{blog.author}</a></span>
                      <span className="post-data"><a href="#">{blog.date}</a></span>
                   </div>
                   <h2 className="tp-blog-details__title mb-25">{blog.title}</h2>
                   <p>
                      Đây là những sản phẩm giúp cuộc sống của bạn trở nên dễ dàng hơn. Thực phẩm tươi ngon được sắp xếp gọn gàng trên kệ bếp gần cửa sổ phòng khách, tạo không gian thoáng đãng cho căn bếp. Cách hoàn hảo để tận hưởng cuộc sống lành mạnh với những thực phẩm tươi ngon nhất.
                   </p>
                   <p>
                      Thực phẩm tươi ngon được sắp xếp cẩn thận trên kệ, tạo nên một không gian bếp hiện đại và tiện nghi. Đối với chúng tôi, phần quan trọng nhất của việc cải thiện cuộc sống là chia sẻ những kiến thức về dinh dưỡng và sức khỏe. Hãy theo dõi chúng tôi để nhận được những thông tin hữu ích về thực phẩm và lối sống lành mạnh.
                   </p>
                   <div className="tp-blog-details__quation pt-15 pb-40 text-center">
                      <i>"  Đĩa ở đáy bát có thể được xoay ngược chiều kim đồng hồ để <br/> thoát nước khi rửa rau củ và có thể được xoay lại.  " </i>
                   </div>
                   <p>
                      Thực phẩm hữu cơ mang đến một cảm giác tươi mới và tự nhiên. Với thiết kế đơn giản và hiện đại, sản phẩm của chúng tôi có vẻ ngoài mềm mại và thân thiện, mang lại cảm giác gần gũi như từ vườn nhà. Mỗi sản phẩm đều được chọn lọc kỹ càng, đảm bảo chất lượng cao nhất. Chúng tôi cam kết mang đến cho bạn những sản phẩm tươi ngon nhất từ trang trại đến bàn ăn. 
                   </p>
                </div>
                <div className="tp-blog-details__img">
                   <div className="row">
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_1} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_2} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_3} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__content">
                   <p>
                      Việc bị nhốt trong bốn bức tường đã hạn chế suy nghĩ của chúng ta. Tôi cảm thấy như suy nghĩ hạn hẹp của chúng ta vang vọng qua bức tường này. Chúng ta quá quen với lịch trình và cuộc sống dự đoán được đến nỗi chúng ta đã thành công trong việc kìm nén khía cạnh sáng tạo của mình. Khi bạn bước ra khỏi bốn bức tường này vào một buổi sáng yên bình, bạn sẽ nhận ra thiên nhiên có bao nhiêu điều để mang lại cho bạn. Nó vô tận. Những suy nghĩ, lo lắng, thời hạn của bạn sẽ không cộng hưởng ở đây.
                   </p>
                   <p>
                      Thực phẩm tươi ngon từ thiên nhiên là món quà tuyệt vời nhất. Chúng tôi tin rằng mỗi bữa ăn nên được chuẩn bị với tình yêu và sự chăm chút. Từ những nguyên liệu tươi ngon nhất đến cách chế biến cẩn thận, mỗi khía cạnh đều quan trọng. Hãy để chúng tôi đồng hành cùng bạn trên hành trình tìm kiếm một lối sống lành mạnh và hạnh phúc hơn.
                   </p>
                </div>
                <div className="postbox__tag-border mb-45">
                   <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-6 col-md-12">
                         <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                               <span>Thẻ: </span>
                               <Link href="/blog">Thực phẩm</Link>
                               <Link href="/blog">Rau củ</Link>
                               <Link href="/blog">Lối sống</Link>
                            </div>
                         </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-12">
                         <div className="postbox__social-tag">
                            <span>Chia sẻ:</span>
                            <a className="blog-d-lnkd" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="blog-d-pin" href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a className="blog-d-fb" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="blog-d-tweet" href="#"><i className="fab fa-twitter"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__post-link mb-15">
                   <div className="row">
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__post-item mb-30">
                            <span><i className="far fa-chevron-left"></i> Bài Trước</span>
                            <a href="#">Lý Do Phổ Biến Bạn Nên Uống <br/> Nước Ép Mỗi Ngày</a>
                         </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__post-item text-end mb-30">
                            <span>Bài Tiếp <i className="far fa-chevron-right"></i></span>
                            <a href="#">Chuyển Đổi Phong Cách Yêu Thích Của Bạn <br/> Sang Thu Pháp </a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__author d-flex  mb-45">
                   <div className="tp-blog-details__author-img mr-30">
                      <Image src={author} alt="author"/>
                   </div>
                   <div className="tp-blog-details__author-text">
                      <h3 className="tp-blog-details__author-title">QUẢN TRỊ VIÊN</h3>
                      <p>Thực phẩm có khả năng chống nước và bụi bẩn cao, dễ dàng làm sạch, nên chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác.</p>
                      <a href="#" className="author-btn">Tất Cả Bài Viết Của Tác Giả</a>
                   </div>
                </div>
                <div className="postbox__comment mb-65">
                   <h3 className="postbox__comment-title mb-35">ĐỂ LẠI BÌNH LUẬN</h3>
                   {/* blog details comment */}
                   <BlogDetailsComments/>
                   {/* blog details comment */}
                </div>
                <div className="tpreview__form postbox__form">
                   <h4 className="tpreview__form-title mb-10">ĐỂ LẠI PHẢN HỒI </h4>
                   <p>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu *</p>
                   {/* blog details form */}
                   <BlogDetailsForm/>
                   {/* blog details form */}
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default BlogDetailsArea;