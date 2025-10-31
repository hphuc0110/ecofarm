import Image from "next/image";
import React from "react";

// postbox comment box
type IProps = { img: string; isChildren: boolean; name: string; desc: string };
function PostboxCommentBox({ img, isChildren, name, desc }: IProps) {
  return (
    <li className={`${isChildren ? "children mb-30" : ""}`}>
      <div
        className={`postbox__comment-box ${isChildren ? "pl-90" : ""} d-flex`}
      >
        <div className="postbox__comment-info">
          <div className="postbox__comment-avater mr-25">
            <Image
              src={`/assets/img/blog/comment-${img}.jpg`}
              alt="comment-img"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="postbox__comment-text">
          <div className="postbox__comment-name">
            <h5>{name}</h5>
          </div>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
          <div className="postbox__comment-reply">
            <a href="#">Trả lời</a>
          </div>
        </div>
      </div>
    </li>
  );
}

const BlogDetailsComments = () => {
  return (
    <ul>
      <PostboxCommentBox
        img="1"
        isChildren={false}
        name="Nguyễn Thị Thúy"
        desc="Thực phẩm có khả năng chống nước và bụi bẩn cao, dễ dàng làm sạch, 
              nên chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác. 
              Có rất ít ứng dụng và tiện ích có sẵn cho mục đích này, nhiều ứng dụng 
              trong số đó yêu cầu đăng ký hàng tháng."
      />
      <PostboxCommentBox
        img="2"
        isChildren={true}
        name="Bùi Mạnh Quỳnh"
        desc="Bao gồm các ví dụ từ kinh nghiệm của bạn, hoặc những điều bạn nhận thấy 
              mà bạn <br /> cảm thấy người khác sẽ thấy hữu ích."
      />
      <PostboxCommentBox
        img="3"
        isChildren={false}
        name="Lê Thị Thu Hà"
        desc="Thực phẩm có khả năng chống nước và bụi bẩn cao, dễ dàng làm sạch, 
              nên chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác. 
              Có rất ít ứng dụng và tiện ích có sẵn cho mục đích này, nhiều ứng dụng 
              trong số đó yêu cầu đăng ký hàng tháng."
      />
    </ul>
  );
};

export default BlogDetailsComments;
