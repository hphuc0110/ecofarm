import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import AboutAreaFour from "@/components/about/about-area-4";
import AboutArea from "@/components/about/about-area";
import AboutAreaThree from "@/components/about/about-area-3";
import AboutVideoArea from "@/components/about/about-video-area";
import ChooseArea from "@/components/choose-us/choose-area";
import FeatureArea from "@/components/feature/feature-area";
import TestimonialAreaThree from "@/components/testimonial/testimonial-area-3";
import Footer from "@/layouts/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Ecofarm Hải Dương",
};

export default function AboutPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb area start */}
        <section
          className="about-area tpabout__inner-bg pt-175 pb-170 mb-50"
          style={{ backgroundImage: `url(/assets/img/banner/about-bg-1.png)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tpabout__inner text-center">
                  <h5 className="tpabout__inner-sub mb-15">Về Ecofarm</h5>
                  <h3 className="tpabout__inner-title mb-35">
                    Những con người đặc biệt
                  </h3>
                  <p>
                    Với hơn 25 năm kinh nghiệm, chúng tôi đã xây dựng hàng ngàn
                    quy trình khám phá chiến lược
                    <br />
                    giúp chúng tôi bóc tách từng lớp để hiểu và kết nối sâu sắc
                    hơn với khách hàng.
                  </p>
                  <div className="tpabout__inner-btn">
                    <Link href="/about">Về chúng tôi</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}

        {/* about area start */}
        <AboutAreaFour />
        {/* about area end */}

        {/* about area start */}
        <AboutArea style_2={true} />
        {/* about area end */}

        {/* about area start */}
        <AboutAreaThree style_2={true} />
        {/* about area end */}

        {/* about video area start */}
        <AboutVideoArea />
        {/* about video area end */}

        {/* choose area start */}
        <ChooseArea style_2={true} />
        {/* choose area end */}

        {/* testimonial three start */}
        <TestimonialAreaThree />
        {/* testimonial three end */}

        {/* feature area start */}
        <FeatureArea style_2={true} />
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
