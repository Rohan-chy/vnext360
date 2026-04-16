import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const TOKEN_COOKIE_NAME = 'nepcare_access_token';

  const cookieStore = await cookies();
  // const token = cookieStore.get(TOKEN_COOKIE_NAME)?.value;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OWJmMmQwMy1hOTIwLTQ1YzUtODExMC0yNjE4ZDczYmIxMmYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijc1YzAzYjI5LTIyNzctNDQ1NC04N2EyLThjNjQ3MWQ2MjgxOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InBhdGllbnRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IlBBVElFTlQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IiIsImZ1bGxOYW1lIjoiUEFUSUVOVCBBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJBZG1pbiIsImlwQWRkcmVzcyI6IjE5Mi4xNjguMS4yNTQiLCJ0ZW5hbnQiOiJQYXRpZW50IiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAwMC9hc3NldHMvZGVmYXVsdHMvcHJvZmlsZS1waWN0dXJlLndlYnAiLCJleHAiOjE3Njc3NzA1MTYsImlzcyI6Imh0dHBzOi8vZnVsbHN0YWNraGVyby5uZXQiLCJhdWQiOiJmdWxsc3RhY2toZXJvIn0.dxfZ3zud_owcvlqxUJ6NDA7LPlaOMQUVQmrI4qPOBQg';

  // Read body ONCE
  const body = await req.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );

  const text = await res.text();

  return new Response(text, {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET() {
  const message = 'GET method is not supported on this route.';
  const res = new Response(JSON.stringify({ message }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });

  return new Response(await res.text(), { status: res.status });
}
