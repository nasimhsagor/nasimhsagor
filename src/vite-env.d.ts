/// <reference types="vite/client" />

declare module '*.jsx' {
    const component: any;
    export default component;
}

interface Window {
    $: any;
    jQuery: any;
    myFunction: any;
}
