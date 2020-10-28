export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      // ComponentDidMount, ComponentDidUpdate
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        // ComponentWillUnMount 로부터 호출
        if (element.curret) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []); // dependency를 넣어주지 않음으로써 add가 한번만 실행됨
    return element;
  };