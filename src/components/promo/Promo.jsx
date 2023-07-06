import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';

import Button from '../button/Button';

import woman from '../../resources/img/woman_main.png';
import woman2 from '../../resources/img/woman2.png';
import woman3 from '../../resources/img/woman3.png';
import arrow from '../../resources/icons/Arrow.png';
import styles from './promo.module.scss';

const Promo = () => {
    return(
        <div className={styles.promo}>
            {/* <div className={styles.separator}></div> */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.news}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            >
                            <SwiperSlide>
                                <h1>Новые поступления <br/> в этом сезоне</h1>
                                <div className={styles.description}>
                                    Утонченные сочетания и бархатные <br/> оттенки - вот то, что вы искали в этом <br/> сезоне. Время исследовать.
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1>Что-то новенькое. <br/> Мы заждались тебя.</h1>
                                <div className={styles.description}>
                                    Надоело искать себя в сером городе? <br/> Настало время новых идей, свежих <br/> красок и вдохновения с Womazing!
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1>Включай новый <br/> сезон с WOMAZING</h1>
                                <div className={styles.description}>
                                    Мы обновили ассортимент <br/> - легендарные коллекции и новинки <br/> от отечественных дизайнеров
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.navigation}>
                            <div className={styles.arrow}>
                                <img src={arrow} alt='arrow'></img>
                            </div>
                            <Link to='/shop'>
                                <Button text={'Открыть магазин'}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.pictures}>
                    <div className={styles.images}>
                        <div className={styles.mainImage}>
                            <img src={woman} alt='woman'></img>
                        </div>
                        <div className={styles.image}>
                            <img src={woman2} alt='woman'></img>
                        </div>
                        <div className={styles.image}>
                            <img src={woman3} alt='woman'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;