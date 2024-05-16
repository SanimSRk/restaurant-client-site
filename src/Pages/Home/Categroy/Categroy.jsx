import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import categorImg1 from '..//..//..//assets/home/slide1.jpg';
import categorImg2 from '..//..//..//assets/home/slide2.jpg';
import categorImg3 from '..//..//..//assets/home/slide3.jpg';
import categorImg4 from '..//..//..//assets/home/slide4.jpg';
import categorImg5 from '..//..//..//assets/home/slide5.jpg';
import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';
const Categroy = () => {
  return (
    <>
      <div className="my-[120px]">
        <SectionTitle
          sebHeading={'---From 11:00am to 10:00pm---'}
          heading={'ORDER ONLINE'}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-12"
        >
          <SwiperSlide>
            <div>
              <img src={categorImg1} alt="" />
              <h2 className="uppercase text-center -mt-20  text-white">
                Salads
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={categorImg2} alt="" />
              <h2 className="uppercase text-center  -mt-20 text-white">
                Soups
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={categorImg3} alt="" />
              <h2 className="uppercase text-center  -mt-20 text-white">
                pizzas
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={categorImg4} alt="" />
              <h2 className="uppercase text-center  -mt-20 text-white">
                desserts
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={categorImg5} alt="" />
              <h2 className="uppercase text-center  -mt-20 text-white">
                Salads
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Categroy;
