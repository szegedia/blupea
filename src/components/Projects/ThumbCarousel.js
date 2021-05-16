import * as React from 'react'
import Carousel from 'react-multi-carousel'
import Img from 'gatsby-image'
import classNames from 'classnames'
import styles from './Projects.module.css'
import 'react-multi-carousel/lib/styles.css'

const ThumbCarousel = ({ projectsData, currentIndex, onChange }) => {
  const thumbnail = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems } } = rest
    return (
      <div className="flex items-center justify-center mt-10">
        <button
          type="button"
          className="cta"
          onClick={previous}
          disabled={currentSlide === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button
          type="button"
          className="cta"
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

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={thumbnail}
      itemClass={styles.sliderImageItem}
      containerClass={styles.thumbCarousel}
      arrows={false}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside
    >
      {projectsData.map((project, index) => {
        const fluid = project.images[0]
        const orderNumber = `0${index + 1}`.slice(-2)
    
        return (
          <div
            role="button"
            tabIndex="0"
            onKeyPress={e => e.key === 'Enter' && onChange(index)}
            key={`thumbnail-${project.id}_${index}`}
            onClick={() => {
              onChange(index)
            }}
            className={classNames(styles.thumbCarouselItem, {
              'opacity-100': currentIndex === index,
              'opacity-50': currentIndex !== index
            })}
          >
            <Img fluid={fluid} className={styles.thumbCarouselImage} />
      
            <div className="flex items-end justify-between mt-3">
              <span className="text-2xl text-gray-400 font-thin">{orderNumber}</span>
              <span className="text-xs font-bold">{project.subtitle}</span>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ThumbCarousel