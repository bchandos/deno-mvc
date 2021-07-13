// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v7.7.0/context.ts';

// Timing
export default async (ctx: Context, next: any) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  };