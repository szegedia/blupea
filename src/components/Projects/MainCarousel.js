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

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems } } = rest
    return (
      <div className="absolute bottom-0 right-0 flex items-center justify-center mt-10">
        <button
          type="button"
          className="cta bg-opacity-50 border-0 border-r"
          onClick={previous}
          disabled={currentSlide === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button
          type="button"
          className="cta bg-opacity-50 border-none"
          onClick={next}
          disabled={currentSlide === totalItems}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    );
  }

  React.useEffect(() => {
    carouselRef.current.goToSlide(0, true)
  }, [currentProject])

  return (
    <Carousel
      ref={el => carouselRef.current = el}
      responsive={responsive}
      itemClass={styles.mainSliderImageItem}
      customButtonGroup={<CustomButtonGroup />}
      additionalTransfrom={-20}
      swipeable={false}
      draggable={false}
      arrows={false}
      partialVisible
      focusOnSelect
      infinite
    >
      {currentProject.images.map((fluid, index) => {
        return <Img fluid={fluid} className={styles.mainCarouselItem} key={index} />
      })}
    </Carousel>
  )
}

export default MainCarousel