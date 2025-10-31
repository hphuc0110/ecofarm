import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blog_data from '@/data/blog-data';

// prop type 
type IProps = {
  left_sidebar?: boolean;
}
const BlogSidebar = ({left_sidebar}:IProps) => {
  const recent_post = [...blog_data].slice(-4);
  return (
    <div className={`tpblog__right-item ${left_sidebar?'blog-left-sidebar':''} pb-50`}>
      <div className="sidebar__widget mb-30">
          <div className="sidebar__widget-content">
            <div className="sidebar__search">
                <form action="#">
                  <div className="sidebar__search p-relative">
                      <input type="text" placeholder="Tìm kiếm"/>
                      <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>
            </div>
          </div>
      </div>
      <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title mb-15">Danh Mục Blog</h3>
          <div className="sidebar__widget-content">
            <ul>
                <li><Link href="/blog-details">Thực Phẩm Lành Mạnh <span>(15)</span></Link></li>
                <li><Link href="/blog-details">Trang Trại Sữa <span>(12)</span></Link></li>
                <li><Link href="/blog-details">Lối Sống <span>(10)</span></Link></li>
                <li><Link href="/blog-details">Mẹo & Thủ Thuật <span>(15)</span></Link></li>
                <li><Link href="/blog-details">Mua Sắm <span>(13)</span></Link></li>
                <li><Link href="/blog-details">Thực Phẩm Hữu Cơ <span>(08)</span></Link></li>
                <li><Link href="/blog-details">Nhiếp Ảnh <span>(17)</span></Link></li>
                <li><Link href="/blog-details">Chưa Phân Loại <span>(02)</span></Link></li>
            </ul>
          </div>
      </div>
      <div className="sidebar__widget mb-35">
          <h3 className="sidebar__widget-title mb-15">Bài Viết Gần Đây</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {recent_post.map((post) => (
                <div key={post.id} className="rc__post mb-20 d-flex align-items-center">
                <div className="rc__post-thumb">
                    <Link href="/blog-details">
                      <Image src={post.image} alt="blog-sidebar" width={70} height={70}/>
                    </Link>
                </div>
                <div className="rc__post-content">
                    <h3 className="rc__post-title">
                      <Link href="/blog-details">{post.title}</Link>
                    </h3>
                    <div className="rc__meta">
                      <span>{post.date}</span>
                    </div>
                </div>
              </div>
              ))}
            </div>
          </div>
      </div>
      <div className="sidebar__widget mb-55">
          <h3 className="sidebar__widget-title mb-15">Thẻ</h3>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
                <Link href="/blog-details">lành mạnh</Link>
                <Link href="/blog-details">tự nhiên</Link>
                <Link href="/blog-details">salad</Link>
                <Link href="/blog-details">thực phẩm</Link>
                <Link href="/blog-details">Ecofarm</Link>
                <Link href="/blog-details">thịt</Link>
                <Link href="/blog-details">tạp hóa</Link>
                <Link href="/blog-details">tươi</Link>
                <Link href="/blog-details">chay</Link>
                <Link href="/blog-details">rau củ</Link>
                <Link href="/blog-details">hải sản</Link>
                <Link href="/blog-details">trái cây</Link>
                <Link href="/blog-details">cà chua</Link>
                <Link href="/blog-details">nấu ăn</Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogSidebar;