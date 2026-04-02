import { useEffect } from 'react';                                                 
                             
    const { pathname } = useLocation();  
    useEffect(() => {                                                                           
        if ('scrollRestoration' in window.history) {                                                          
        }  
        // Always scroll to top on route change                                
    }, [pathname]);  
    return null;    
                             
