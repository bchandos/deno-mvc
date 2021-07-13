// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v7.7.0/context.ts';

// Logger
export default async (ctx: Context, next: any) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${ctx.response.status} - ${rt}`);
};