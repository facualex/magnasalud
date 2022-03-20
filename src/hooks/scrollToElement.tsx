function useScrollToElement(elementRef: React.MutableRefObject<HTMLElement | null>) {
  console.log(elementRef);
  let scrollToElement = () => {
    return;
  };

  if (elementRef && elementRef.current) {
    scrollToElement = elementRef.current.scrollIntoView;
  }

  return [scrollToElement];
}

export default useScrollToElement;
