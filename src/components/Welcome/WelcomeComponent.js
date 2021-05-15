import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AliceCarousel from 'react-alice-carousel'
import Layout from '@components/Layout/LayoutComponent'
// import styles from './Welcome.module.css'
import 'react-alice-carousel/lib/alice-carousel.css'

const WelcomeComponent = () => {
  const carouselRef = React.useRef(null)
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: {relativeDirectory: {eq: "main"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                srcSet
                src
                aspectRatio
              }
            }
          }
        }
      }
    }
  `)

  const items = data.allFile.edges.map(({ node }) => (
    <Img fluid={node.childImageSharp.fluid} />
  ))

  const handleNavClick = (direction) => {
    if (direction === 'prev') {
      carouselRef.current.slidePrev()
    } else {
      carouselRef.current.slideNext()
    }
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
      <section className="md:w-2/3 relative">
        <AliceCarousel
          ref={el => carouselRef.current = el}
          autoPlay
          autoPlayStrategy="all"
          autoPlayInterval={5000}
          animationDuration={2000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
        <div className="absolute right-0 bottom-0 flex">
          <button type="button" className="cta is-filled" onClick={() => handleNavClick('prev')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button type="button" className="cta is-filled" onClick={() => handleNavClick('next')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default WelcomeComponent
