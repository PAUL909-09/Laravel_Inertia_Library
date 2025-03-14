// import '../css/app.css';

// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot } from 'react-dom/client';
// import { initializeTheme } from './hooks/use-appearance';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

//         root.render(<App {...props} />);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });

// initializeTheme();

//import './bootstrap';


import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { JSX } from 'react';
import MyLayout from './layouts/MainLayout';


createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        const page = pages[`./Pages/${name}.tsx`] as { default: { layout?: (page: React.ReactNode) => JSX.Element } };
        page.default.layout = page.default.layout || ((page: React.ReactNode) => <MyLayout>{page}</MyLayout>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});