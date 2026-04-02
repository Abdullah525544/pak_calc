import React from 'react';                                                       
import { Helmet } from 'react-helmet-async';                                             
                                    
    const location = useLocation();                                     
                                    
                                           
    const tool = CALCULATORS.find(c => c.id === toolId);  
    // Breadcrumb Schema                      
        "@context": "https://schema.org",                                    
        "itemListElement": [               
                "@type": "ListItem",                                
                "name": "Home",                                                 
            },               
                "@type": "ListItem",                                
                "name": toolâ”.category || "Tools",                                                          
            },               
                "@type": "ListItem",                                
                "name": toolâ”.name || "Current Page",                                                       
            }           
    };  
    return (            
            <Helmet>                                                                                      
            </Helmet>                                                                                        
                <ol className="inline-flex items-center space-x-1 md:space-x-3">                                                               
                        <Link to="/" className="hover:text-emerald-600 transition-colors">                                  
                        </Link>                           
                    <li>                                                             
                            <span className="mx-2 text-slate-400">/</span>                                                                                                         
                                {toolâ”.category || "Tools"}                                     
                        </div>                           
                    <li aria-current="page">                                                             
                            <span className="mx-2 text-slate-400">/</span>                                                                                                                
                                {toolâ”.name || "Current Page"}                                     
                        </div>                           
                </ol>                    
        </>        
}; 