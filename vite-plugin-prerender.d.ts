declare module 'vite-plugin-prerender' {                                  
        staticDir: string;                           
        [key: string]: any;       
    function prerender(options: PrerenderOptions): any;                               
} 