declare module 'vite-plugin-prerender' {
    export interface PrerenderOptions {
        staticDir: string;
        [key: string]: any;
    }
    function prerender(options: PrerenderOptions): any;
    export default prerender;
}