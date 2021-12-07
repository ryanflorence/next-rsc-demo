import { Links, LiveReload, Meta, useLoaderData } from "remix";
import { default as News, loader } from "./pages/ssr";
import ExtraMeta from "./components/meta";

export { loader };

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <ExtraMeta />
        <Meta />
        <Links />
      </head>
      <body>
        <News data={useLoaderData()} />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
