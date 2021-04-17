const useProjects = () => {
  const projectItems = [
    {
      id: 'project-id-1',
      name: 'Stylish family apartment',
      images: [
        'https://picsum.photos/1350/850?random=1',
        'https://picsum.photos/1350/850?random=2',
        'https://picsum.photos/1350/850?random=3'
      ]
    },
    {
      id: 'project-id-2',
      name: 'Stylish family apartment 2',
      images: [
        'https://picsum.photos/1350/850?random=4',
        'https://picsum.photos/1350/850?random=5',
        'https://picsum.photos/1350/850?random=6'
      ]
    },
    {
      id: 'project-id-3',
      name: 'Stylish family apartment 3',
      images: [
        'https://picsum.photos/1350/850?random=7',
        'https://picsum.photos/1350/850?random=8',
        'https://picsum.photos/1350/850?random=9'
      ]
    }
  ]

  const handleItemClick = (projectId) => {
    console.log('> switch to ', projectId)
  }
  
  return {
    projectItems,
    handleItemClick
  }
}

export default useProjects
