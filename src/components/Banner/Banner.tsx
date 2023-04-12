import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

interface BannerProps {
  banners: {
    id: number,
    label: string,
    img: string,
    img_resp: string
  }[]
}

export default function Banner({ banners }: BannerProps) {
  return <Wrapper>

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      /* onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} */
    >
      {
        banners.map(banner => (
          <SwiperSlide key={banner.id}>
            <img src={window.innerWidth < 600 ? banner.img_resp : banner.img} alt={banner.label} />
          </SwiperSlide>
        ))
      }
    </Swiper>

  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  & img {
    display: flex;
    max-width: 1400px;
    width: 100%;
    height: 550px;
    object-fit: cover;
    margin: 0 auto;
  }

  & .swiper-pagination-bullet {
    background-color: var(--colorTxt);
  }

  @media (max-width: 1400px) {
    & img {
      height: 450px;
    }
  }

  @media (max-width: 1200px) {
    & img {
      height: 400px;
    }
  }

  @media (max-width: 900px) {
    & img {
      height: 300px;
    }
  }
`