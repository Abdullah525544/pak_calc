import React from 'react';                                              
                          
    title: string;                          
    canonicalUrlâ”: string;   
                                                                                     
    const siteUrl = 'https://pakcalc.site';                                           €                                         
    const ogImage = `${siteUrl}/og-image.png`;  
    return (                  
            <title>{title}</title>                                                               
            <link rel="canonical" href={fullCanonicalUrl} />  
            {/* Open Graph */}                                                          
            <meta property="og:description" content={description} />                                                                   
            <meta property="og:type" content="website" />                                                            
                                  
            <meta name="twitter:card" content="summary_large_image" />                                                           
            <meta name="twitter:description" content={description} />                                                             
        </Helmet>        
};  
                         
