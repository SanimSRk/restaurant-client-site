import { useEffect, useState } from 'react';
import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const Testmonil = () => {
  const [reviwes, setreviwes] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => {
        setreviwes(data);
      });
  }, []);
  return (
    <div className="my-[120px]">
      <SectionTitle
        heading={'TESTIMONIALS'}
        sebHeading={'---What Our Clients Say---'}
      ></SectionTitle>
      <div className="">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviwes.map((revi, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="w-2/3 mx-auto text-center mt-12">
                  <div className="text-center grid justify-center mb-7">
                    <Rating
                      style={{ maxWidth: 250 }}
                      value={revi?.rating}
                      readOnly
                    />
                  </div>
                  <p className="text-xl">{revi?.details}</p>
                  <p className="text-3xl mt-5 font-semibold text-[#CD9003]">
                    {revi?.name}
                  </p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonil;
