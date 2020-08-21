const fullyInView = (elem: Element) => {
  const bounding = elem.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}
const anyInView = (elem: Element) => {
  const bounding = elem.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    (bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) ||
      bounding.top <=
        (window.innerHeight || document.documentElement.clientHeight)) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}
const topInView = (elem: Element) => {
  const bounding = elem.getBoundingClientRect()
  console.log('bounding window.innerHeight', bounding, window.innerHeight)
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}
export { fullyInView, topInView, anyInView }
