import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'

import 'swiper/css'
import styles from './ImageViewer.module.scss'
import './swiper.css'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

function CloseButton({
  className,
  onClose,
}: {
  className: string
  onClose: () => void
}) {
  return (
    <svg
      className={className}
      id="Close"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
    </svg>
  )
}

export default ImageViewer
