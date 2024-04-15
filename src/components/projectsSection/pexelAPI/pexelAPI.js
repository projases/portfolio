import { createClient } from "/node_modules/.vite/deps/pexels.js?v=6e07c4d5";

export function getPexelsAPI() {
  const client = createClient(
    "YXna99vPo7Rw8olvv2nigXAL6jUMYU3do1El29JoUigM1gxY49cgtP3p",
  );
  const query = "design";
  const perPage = 6;

  return { client, query, perPage };
}
