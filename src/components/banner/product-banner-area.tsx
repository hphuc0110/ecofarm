import Link from 'next/link';
import React from 'react';

// prop type
type IProps = {
  bg: string
  subtitle: string
  title: string
  text: string
  isWhite?: boolean
}
// banner item
function BannerItem({bg,subtitle,title,text,isWhite}:IProps) {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="tpbanner__item mb-30">
          <Link href="/shop">
              <div className="tpbanner__content" style={{backgroundImage: `url(${bg})`}}>
                <span className={`tpbanner__sub-title ${isWhite ? 'tpbanner__white' : ''} mb-10`}>
                  {subtitle}
                 </span>
                <h4 className="tpbanner__title mb-30" dangerouslySetInnerHTML={{ __html: title }}></h4>
                <p>{text}</p>
              </div>
          </Link>
        </div>
    </div>
  )
}

const ProductBannerArea = () => {
  return (
    <section className="banner-area pb-60 grey-bg">
      <div className="container">
          <div className="row">
            <BannerItem bg='/assets/img/banner/banner-1.jpg' subtitle='Top offers' title='Gói Rau ĐỊNH KỲ <br/>GÓI AN TÂM - GÓI ĐỦ ĐẦY' text='Free Shipping 05km' />
            <BannerItem bg='/assets/img/banner/banner-2.jpg' subtitle='Weekend Deals' title='Uống DETOX <br/> Vừa vui vừa khoẻ' text='MUA 5 TẶNG 2' isWhite={true} />
            <BannerItem bg='/assets/img/banner/banner-3.jpg' subtitle='TOP SECRET' title='Blind Box Rau' text='Chỉ từ 50k' />
          </div>
      </div>
    </section>
  );
};

export default ProductBannerArea;