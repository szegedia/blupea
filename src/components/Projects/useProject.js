import { useStaticQuery, graphql } from 'gatsby'
import projects from '@src/projects.json'

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query ProjectImages {
      projectImages: allFile(filter: {relativeDirectory: {ne: "main"}, relativePath: {regex: "images/"}}) {
        edges {
          node {
            relativeDirectory
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

  const projectImages = data.projectImages.edges.reduce((acc, { node: { relativeDirectory, childImageSharp }}) => {
    if (!acc[relativeDirectory]) {
      acc[relativeDirectory] = []
    }

    acc[relativeDirectory].push(childImageSharp.fluid)
    return acc
  }, {})

  const projectsData = projects.map(project => ({ ...project, images: projectImages[project.id] }))

  return {
    projectsData
  }
}

export default useProjects
