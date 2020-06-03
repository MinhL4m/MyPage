import React from 'react'
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {

}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
}