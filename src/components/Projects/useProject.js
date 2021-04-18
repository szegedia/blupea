import { useState } from 'react'

const useProjects = ({ carouselRef }) => {
  const projectItems = [
    {
      id: 'project-id-1',
      name: 'Stylish family apartment',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est, feugiat consequat libero non, auctor malesuada mi.',
      images: [
        'https://picsum.photos/1350/650?random=1',
        'https://picsum.photos/1350/650?random=2',
        'https://picsum.photos/1350/650?random=3',
        'https://picsum.photos/1350/650?random=10',
        'https://picsum.photos/1350/650?random=11',
        'https://picsum.photos/1350/650?random=12',
      ]
    },
    {
      id: 'project-id-2',
      name: 'Stylish family apartment 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor.',
      images: [
        'https://picsum.photos/1350/650?random=4',
        'https://picsum.photos/1350/650?random=5',
        'https://picsum.photos/1350/650?random=6'
      ]
    },
    {
      id: 'project-id-3',
      name: 'Stylish family apartment 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est, feugiat consequat libero non, auctor malesuada mi.',
      images: [
        'https://picsum.photos/1350/650?random=7',
        'https://picsum.photos/1350/650?random=8',
        'https://picsum.photos/1350/650?random=9'
      ]
    }
  ]
  const [current, setCurrent] = useState(projectItems[0])

  const handleItemClick = (projectId) => {
    const project = projectItems.find(({ id }) => id === projectId)
    setCurrent(project)
    carouselRef.current.goToSlide(0, true)
  }
  
  return {
    current,
    projectItems,
    handleItemClick
  }
}

export default useProjects
