import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'react-scroll'
import Carousel from 'react-multi-carousel'
import Layout from '@components/Layout/LayoutComponent'
import styles from './Welcome.module.css'
import 'react-multi-carousel/lib/styles.css'

const WelcomeComponent = () => {
  const carouselRef = React.useRef(null)
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: {relativeDirectory: {eq: "main"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100, maxWidth: 2400) {
                srcSet
                src
                aspectRatio
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const resetAutoplay = () => {
    clearInterval(carouselRef.current.autoPlay)
    carouselRef.current.autoPlay = setInterval(carouselRef.current.next, carouselRef.current.props.autoPlaySpeed)
  }

  const responsive = {
    allscreen: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
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

  return (
    <Layout className="flex flex-col relative w-full mt-8 md:items-end md:mt-40">
      <section className="static py-12 bg-white bg-opacity-75 md:absolute md:z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2 md:pr-12">
        <h1 className="md:ml-12">Élettelteli otthon tervezése</h1>
        <div className="w-1/3 h-px my-8 bg-gray-400"></div>
        <p className="text-xl leading-normal mb-12 md:ml-12">
          Innovatív belsőépítészeti megoldások, esztétikus otthonok kialakítása.
          Modern terek a funkcionalitás és a kényelem, valamint az egyéniség hangsúlyozásával.
        </p>
        <Link
          to="services"
          smooth
          spy
        >
          <button className="cta md:ml-12">
            Tudj meg többet
          </button>
        </Link>
      </section>
      <section className="md:w-2/3 relative">
        <Carousel
          ref={el => carouselRef.current = el}
          responsive={responsive}
          autoPlaySpeed={5000}
          itemClass={styles.mainSliderImageItem}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          beforeChange={resetAutoplay}
          autoPlay
          infinite
          focusOnSelect
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
        >
          {data.allFile.edges.map(({ node }, index) => (
            <Img fluid={node.childImageSharp.fluid} key={`welcome-carousel_${index}}`} />
          ))}
        </Carousel>
      </section>
    </Layout>
  )
}

export default WelcomeComponent
