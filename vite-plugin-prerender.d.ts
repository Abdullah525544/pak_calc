declare module 'vite-plugin-prerender' {
    interface PrerenderOptions {
        staticDir: string;
        routes: string[];
        [key: string]: any;
    }
    function prerender(options: PrerenderOptions): any;
    export default prerender;
}
