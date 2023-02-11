import { json } from "@sveltejs/kit";

export function GET() {
  const number = Math.floor(Math.random() * 1000000) + 1;
  return json(number);
}
