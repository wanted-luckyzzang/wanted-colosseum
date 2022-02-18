const getScrollTo = (
  type?: string,
  leftValue?: number,
) : void => {
  if (type === "left") {
    window.scrollTo({ left: leftValue, behavior: 'smooth' })
  } 
}

export default getScrollTo;