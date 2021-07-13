// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v7.7.0/context.ts';
// @ts-ignore
import { send } from 'https://deno.land/x/oak@v7.7.0/mod.ts';

export default async (context: Context, next: any) => {
    const root = `${Deno.cwd()}/static`;
    try {
        await send(
            context, 
            context.request.url.pathname, 
            { root }
        )
    } catch {
        await next();
    }
};