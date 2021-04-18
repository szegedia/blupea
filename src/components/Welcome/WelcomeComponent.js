import { graphql } from "gatsby"
import * as React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Layout from '@components/Layout/LayoutComponent'
import styles from './Welcome.module.css'

const WelcomeComponent = ({ images }) => {
  const carouselRef = React.useRef()
  const resetAutoplay = () => {
    clearInterval(carouselRef.current.autoPlay)
    carouselRef.current.autoPlay = setInterval(carouselRef.current.next, carouselRef.current.props.autoPlaySpeed)
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1
    }
  };

  return (
    <Layout className="flex flex-col relative w-full mt-8 md:items-end md:mt-40">
      <section className="static py-12 bg-white bg-opacity-75 md:absolute md:z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2 md:pr-12">
        <h1 className="md:ml-12">Bringing life to the interior</h1>
        <div className="w-1/3 h-px my-8 bg-gray-400"></div>
        <p className="text-xl leading-normal mb-12 md:ml-12">
          Creating the art of stylish living and innovative interior design solitions for
          tomorrow. Contemporary spaces with emphasis on functionality
          and concisenessand indiviuality.
        </p>
        <button className="cta md:ml-12">
          Create a project
        </button>
      </section>
      <section className="md:w-2/3">
        {images?.length && (
          <Carousel
            ref={el => carouselRef.current = el}
            responsive={responsive}
            autoPlaySpeed={5000}
            itemClass={styles.mainSliderImageItem}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            additionalTransfrom={-80}
            beforeChange={resetAutoplay}
            partialVisible
            arrows={false}
            showDots
            autoPlay
            infinite
            focusOnSelect
          >
            {images.map((image, index) => (
              <img key={`welcome-${index}`} src={image} title={index} alt="" />
            ))}
          </Carousel>
        )}
      </section>
    </Layout>
  )
}

export default WelcomeComponent