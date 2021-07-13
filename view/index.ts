// @ts-ignore
import { Handlebars } from 'https://deno.land/x/handlebars@v0.7.0/mod.ts';

const handle = new Handlebars({
    baseDir: 'view',
    extname: '.hbs',
    layoutsDir: 'layouts/',
    partialsDir: 'partials/',
    cachePartials: true,
    defaultLayout: 'main',
    helpers: undefined,
    compilerOptions: undefined,
});

export default handle;