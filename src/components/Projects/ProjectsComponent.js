import * as React from 'react'
import Carousel from 'react-multi-carousel'
import Layout from '@components/Layout/LayoutComponent'
import styles from './Projects.module.css'
import 'react-multi-carousel/lib/styles.css'
import useProjects from './useProject'
import classNames from 'classnames'

const ProjectsComponent = () => {
  const carouselRef = React.useRef()
  const { current, projectItems, handleItemClick } = useProjects({ carouselRef })
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      partialVisibilityGutter: 150
    }
  };

  const thumbnail = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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
    <Layout name="projects">
      <div className="flex flex-col lg:flex-row">
        {current && (
          <>
            <section className="lg:w-1/3 lg:px-24">
              <p className="font-thin text-3xl text-gray-400 mb-4">01</p>
              <h3>{current.name}</h3>
              <p>{current.desc}</p>
            </section>
            <section className={classNames('lg:w-2/3 mb-8', styles.mainCarousel)}>
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
                {current.images.map((img, index) => (
                  <img key={`carousel-${current.id}_${index}}`} src={img} alt="" />
                ))}
              </Carousel>
            </section>
          </>
        )}
      </div>
      <div className="lg:px-24">
        <div className="lg:w-4/5">
          <Carousel
            responsive={thumbnail}
            itemClass={styles.sliderImageItem}
          >
            {projectItems.length && projectItems.map((project, index) => (
              <div
                role="button"
                tabIndex="0"
                key={`thumbnail-${project.id}_${index}`}
                onClick={() => handleItemClick(project.id)}
                className={classNames('outline-none', {
                  'opacity-100': current.id === project.id,
                  'opacity-50': current.id !== project.id
                })}
              >
                <img src={project.images[0]} alt="" />
                <div className="flex items-end justify-between mt-3">
                  <span className="text-2xl text-gray-400 font-thin">{`0${index + 1}`.slice(-2)}</span>
                  <span className="text-xs font-bold">{project.name}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsComponent