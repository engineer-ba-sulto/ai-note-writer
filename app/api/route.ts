export const runtime = "edge";

export async function GET() {
  return Response.json({ message: "Hello, World!" });
}
