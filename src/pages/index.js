import * as React from 'react'
import '../i18n'
import '/src/assets/css/global.css'
import Header from '@components/Header/HeaderComponent'
import Welcome from '@components/Welcome/WelcomeComponent'
import Projects from '@components/Projects/ProjectsComponent'
import Contact from '@components/Contact/ContactComponent'
import Services from '@components/Services/ServicesComponent'
// import Footer from '@components/Footer/FooterComponent'

const Page = () => {
  return (
    <>
      <Header />

      <Welcome />

      <Services />

      <Projects />

      <Contact />

      {/* <Welcome />

      
      <Projects />
      <Contact />
   
      <Footer /> */}
    </>
  )
}

export default Page
