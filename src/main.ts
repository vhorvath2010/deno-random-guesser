import { route, type Route } from "@std/http";
import { Game } from "./game/game.ts";

const game = new Game();

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/guess" }),
    handler: async (request) => {
      try {
        const body = await request.json();
        if (!body || !body.guess) {
          return new Response("Please provide a guess in the json body parameters", { status: 400 });
        }
        const guess = body.guess;
        console.log("Request obtained with guess", guess);
        const result = { isCorrect: game.isGuessCorrect(guess) };
        return new Response(JSON.stringify(result));
      } catch (_e) {
        return new Response("Please provide a guess in the json body parameters", { status: 400 });
      }
    },
    method: "POST",
  },
];

function defaultHandler(_req: Request) {
  return new Response("Not Found", { status: 404 });
}

Deno.serve(route(routes, defaultHandler));
