import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "react-scroll";
import Carousel from "react-multi-carousel";
import Layout from "@components/Layout/LayoutComponent";
import styles from "./Welcome.module.css";
import "react-multi-carousel/lib/styles.css";

const WelcomeComponent = () => {
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: { relativeDirectory: { eq: "main" } }) {
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
  `);

  const responsive = {
    allscreen: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout className="">
      <div className="relative mt-20 md:mt-0">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={3000}
          itemClass={styles.mainSliderImageItem}
          arrows={false}
          draggable={false}
          autoPlay
          infinite
        >
          {data.allFile.edges.map(({ node }, index) => (
            <Img
              fluid={node.childImageSharp.fluid}
              key={`welcome-carousel_${index}}`}
            />
          ))}
        </Carousel>
        <section className="xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:z-10 xl:w-1/2 p-12 bg-white bg-opacity-75">
          <h1 className="md:ml-12">Élettelteli otthon tervezése</h1>
          <div className="w-1/3 h-px my-8 bg-gray-400"></div>
          <p className="text-xl leading-normal mb-12 md:ml-12">
            Innovatív belsőépítészeti megoldások, esztétikus otthonok
            kialakítása. Modern terek a funkcionalitás és a kényelem, valamint
            az egyéniség hangsúlyozásával.
          </p>
          <Link to="services" smooth spy>
            <button className="cta md:ml-12">Tudj meg többet</button>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default WelcomeComponent;
