/* istanbul ignore file */
export const scrollElementIntoView = (
  domElement,
  options = {
    behavior: 'smooth',
    block: 'nearest',
  },
) => domElement.scrollIntoView(options)
