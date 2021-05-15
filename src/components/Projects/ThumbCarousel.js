import * as React from 'react'
import Carousel from 'react-multi-carousel'
import Img from 'gatsby-image'
import classNames from 'classnames'
import styles from './Projects.module.css'
import 'react-multi-carousel/lib/styles.css'

const ThumbCarousel = ({ projectsData, currentIndex, onChange }) => {
  const thumbnail = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  }

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={thumbnail}
      itemClass={styles.sliderImageItem}
    >
      {projectsData.map((project, index) => {
        const fluid = project.images[0]
        const orderNumber = `0${index + 1}`.slice(-2)
    
        return (
          <div
            role="button"
            tabIndex="0"
            key={`thumbnail-${project.id}_${index}`}
            onClick={() => {
              onChange(index)
            }}
            className={classNames(styles.thumbCarouselItem, {
              'opacity-100': currentIndex === index,
              'opacity-25': currentIndex !== index
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