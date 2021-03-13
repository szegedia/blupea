export default () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit', e)
    // e.preventDefault()
  }

  return {
    handleSubmit
  }
}