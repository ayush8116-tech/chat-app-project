import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

export const createApp = () => {
  const app = new Hono();

  app.use(logger());

  app.post("/github-webhook", async (c) => {
    console.log("comming in chat-app....");
    const body = await c.req.json();
    console.log(body);

    return c.text("done");
  });

  app.get("*", serveStatic({ root: "public" }));
  return app;
};
