import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { Container, Content } from './styles'

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import banner6 from '../../assets/images/banner6.jpg'
import banner7 from '../../assets/images/banner7.png'

export default function App() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner1} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner2} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner3} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner4} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner5} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner6} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <Link
              to={{
                pathname:
                  "https://socialgoodbrasil.org.br/conheca-os-participantes-do-demoday-do-sgb-lab-2017/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner7} alt="Aupa news"/>
            </Link>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}