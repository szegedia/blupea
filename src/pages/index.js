import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Header from "@components/Header/HeaderComponent";
import Welcome from "@components/Welcome/WelcomeComponent";
import Contact from "@components/Contact/ContactComponent";
import Services from "@components/Services/ServicesComponent";
import Footer from "@components/Footer/FooterComponent";
import "../i18n";
import "/src/assets/css/global.css";
// import Projects from "@components/Projects/ProjectsComponent";
// import Footer from '@components/Footer/FooterComponent'

const Page = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query siteMetaData {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
        <link rel="canonical" href={siteMetadata.url} />
      </Helmet>

      <Header />

      <Welcome />

      <Services />

      <Contact />

      <Footer />
    </>
  );
};

export default Page;
