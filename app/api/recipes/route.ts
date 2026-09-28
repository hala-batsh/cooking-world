export async function GET() {
  const response = await fetch("https://dummyjson.com/recipes");

  const data = await response.json();

  return Response.json(data);
}