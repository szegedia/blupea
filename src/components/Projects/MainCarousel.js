import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Img from 'gatsby-image'
import classNames from 'classnames'
import styles from './Projects.module.css'
import 'react-alice-carousel/lib/alice-carousel.css'

const MainCarousel = ({ currentProject }) => {
  const carouselRef = React.useRef(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const items = currentProject.images.map(fluid => (
    <Img fluid={fluid} className={classNames('mx-4', styles.mainCarouselItem)} />
  ))

  const handleNavClick = (direction) => {
    if (direction === 'prev') {
      carouselRef.current.slidePrev()
      setActiveIndex(Math.max(activeIndex - 1, 0))
    } else {
      carouselRef.current.slideNext()
      setActiveIndex(Math.min(activeIndex + 1, currentProject.images.length - 1))
    }
  }

  return (
    <div className="relative">
      <AliceCarousel
        ref={el => carouselRef.current = el}
        controlsStrategy="alternate"
        disableButtonsControls
        disableDotsControls
        items={items}
        responsive={{
          0: { items: 1 },
          1024: { items: 1.15 }
        }}
      />
      <div className="absolute right-0 bottom-0 flex">
        <button
          type="button"
          className="cta is-filled"
          onClick={() => handleNavClick('prev')}
          disabled={activeIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button
          type="button"
          className="cta is-filled"
          onClick={() => handleNavClick('next')}
          disabled={activeIndex === currentProject.images.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MainCarousel