import { graphql } from 'gatsby'
import * as React from 'react'
import '../i18n'
import '/src/assets/css/global.css'
import Header from '@components/Header/HeaderComponent'
import Welcome from '@components/Welcome/WelcomeComponent'
import Projects from '@components/Projects/ProjectsComponent'
import Contact from '@components/Contact/ContactComponent'
import Services from '@components/Services/ServicesComponent'
// import Footer from '@components/Footer/FooterComponent'

const Page = ({ data }) => {
  const welcomeCarouselImgs = data?.allFile?.edges?.map(({ node: { childrenImageSharp }}) => childrenImageSharp[0].resize.src)

  return (
    <>
      <Header />

      <Welcome images={welcomeCarouselImgs} />

      <Services />

      <Projects />

      <Contact />
    </>
  )
}

export const query = graphql`
query WelcomeImages {
  allFile(filter: {dir: {regex: "images/project-1/"}}) {
    edges {
      node {
        childrenImageSharp {
          resize(height: 750, quality: 100, fit: FILL, width: 1350) {
            src
          }
        }
      }
    }
  }
}
`

export default Page
