import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import woman from '../../resources/img/woman_main.png'
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
        direction={"vertical"}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={woman} alt='woman'></img></SwiperSlide>
      <SwiperSlide><img src={woman} alt='woman'></img></SwiperSlide>
      <SwiperSlide><img src={woman} alt='woman'></img></SwiperSlide>
      <SwiperSlide><img src={woman} alt='woman'></img></SwiperSlide>
    </Swiper>
  );
};

export default Slider;





// const Contacts = () => {
//     return(
//         <h1>CONTACTS</h1>
//     )
// }

// export default Contacts;