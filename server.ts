// @ts-ignore
import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
// @ts-ignore
import  { logger, timing, staticFiles } from './middleware/index.ts';
// @ts-ignore
import controller from './controller/index.ts';

const app = new Application();

// Logger
app.use(logger);
// Timing
app.use(timing);
// Routing
app.use(controller.routes());
app.use(controller.allowedMethods());
// Static
app.use(staticFiles);

// @ts-ignore
await app.listen({ port: 8000 });