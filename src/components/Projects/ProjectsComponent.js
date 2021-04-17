import * as React from 'react'
import Carousel from 'react-multi-carousel'
import Layout from '@components/Layout/LayoutComponent'
import styles from './Projects.module.css'
import 'react-multi-carousel/lib/styles.css'
import useProjects from './useProject'

const ProjectsComponent = () => {
  const { projectItems, handleItemClick } = useProjects()
  const carouselRef = React.useRef()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
        <section className="lg:w-1/3 lg:p-24">
          <h3>Minimalist style family apartment</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est, feugiat consequat libero non, auctor malesuada mi.
          </p>
        </section>
        <section className="lg:w-2/3 mb-8">
          <Carousel
            ref={el => carouselRef.current = el}
            responsive={responsive}
            arrows={false}
          >
            <img src="https://picsum.photos/1350/850?random=1" alt="" />
            <img src="https://picsum.photos/1350/850?random=2" alt="" />
            <img src="https://picsum.photos/1350/850?random=3" alt="" />
            <img src="https://picsum.photos/1350/850?random=4" alt="" />
            <img src="https://picsum.photos/1350/850?random=5" alt="" />
            <img src="https://picsum.photos/1350/850?random=6" alt="" />
          </Carousel>
        </section>
      </div>
      <div>
        <div className="lg:w-4/5">
          <Carousel
            responsive={thumbnail}
            itemClass={styles.sliderImageItem}
          >
            {projectItems.length && projectItems.map((project, index) => (
              <div onClick={() => handleItemClick(project.id)}>
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