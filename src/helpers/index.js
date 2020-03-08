/* istanbul ignore file */
export const scrollElementIntoView = (
  domElement,
  options = {
    behavior: 'smooth',
    block: 'nearest',
  },
) =>
  domElement && domElement.scrollIntoView && domElement.scrollIntoView(options)
