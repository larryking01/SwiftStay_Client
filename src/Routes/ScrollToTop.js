import React, { useEffect } from 'react'
import { useLocation, useNavigationType } from "react-router-dom";





const ScrollPageToTop = ( { children }) => {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{children}</>
}

export default ScrollPageToTop