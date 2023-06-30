import { useEffect, useState } from 'react';

const useWindowSizeReport = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  return [screenWidth];
}

export default useWindowSizeReport;