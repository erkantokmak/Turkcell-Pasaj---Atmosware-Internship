import { Row, Title } from '@/styles/Global'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleProduct from '../Products/SingleProduct'
import { Product } from '@/types/product'

type BestSellersProps = {
  data: Product[]
}


const BestSellers: React.FC<BestSellersProps> = ({data}) => {
  return (
    <>
      <Row justifyContent='start' padding='50px 0 0 0'>
        <Title fsize='34px' fcolor='#253342' fweight='700' lineHeight='1.24' textAlign='left'>
          Çok Satanlar
        </Title>
      </Row>
      <Row padding='50px 0'>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
        >
           {
            data.filter((product: Product) => product.bestOffer === true)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index}>
                  <SingleProduct product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Row>
    </>
  )
}

export default BestSellers