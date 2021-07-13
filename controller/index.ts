// @ts-ignore
import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
// @ts-ignore
import handle from '../view/index.ts';

const controller = new Router();

controller.get('/', async (context) => {
    context.response.body = await handle.renderView(
        'index', 
        {
            message: 'Hello, world!'
        }
    );
});

export default controller;