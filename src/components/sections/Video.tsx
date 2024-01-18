import classNames from 'classnames/bind'
import styles from './Video.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    // NOTE: source를 자동 재생하려면 muted를 사용해야함
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/main.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
