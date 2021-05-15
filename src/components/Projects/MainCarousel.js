import * as React from 'react'
import Carousel from 'react-multi-carousel'
import Img from 'gatsby-image'
import styles from './Projects.module.css'
import 'react-multi-carousel/lib/styles.css'

const MainCarousel = ({ currentProject }) => {
  const carouselRef = React.useRef(null)
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      partialVisibilityGutter: 150
    },
    small: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
  }

  React.useEffect(() => {
    carouselRef.current.goToSlide(0, true)
  }, [currentProject])

  return (
    <Carousel
      ref={el => carouselRef.current = el}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      itemClass={styles.mainSliderImageItem}
      additionalTransfrom={-20}
      partialVisible
      arrows={false}
      focusOnSelect
      showDots
    >
      {currentProject.images.map((fluid, index) => (
        <Img fluid={fluid} className={styles.mainCarouselItem} key={index} />
      ))}
    </Carousel>
  )
}

export default MainCarousel