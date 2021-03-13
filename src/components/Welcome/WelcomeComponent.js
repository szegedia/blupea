import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Layout from '@components/Layout/LayoutComponent'

const WelcomeComponent = () => {
  const { t } = useTranslation()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="absolute z-10 right-0 bottom-0">
        <button className="px-20 py-3 text-white bg-black bg-opacity-80" onClick={previous}>prev</button>
        <button className="px-20 py-3 text-white bg-black bg-opacity-80" onClick={next}>next</button>
      </div>
    )
  }

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
        <Carousel
          responsive={responsive}
          autoPlaySpeed={5000}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          autoPlay
          infinite
        >
          <img src="https://amardesign.eu/wp-content/uploads/2018/12/Cadre_Down_165.jpg" alt="" />
          <img src="https://amardesign.eu/wp-content/uploads/2018/12/Cadre_Down_165.jpg" alt="" />
        </Carousel>
      </section>
    </Layout>
  )
}

export default WelcomeComponent