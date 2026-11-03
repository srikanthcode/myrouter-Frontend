export const dynamic = "force-static";

export async function GET() {
  return new Response("google-site-verification: google616b6046b33b1d2d.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

