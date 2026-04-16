import { NextRequest, NextResponse } from 'next/server';

/* ===================== CONFIG ===================== */

const TENANT_SUBDOMAINS = ['patient', 'doctor', 'tenant'] as const;
type Tenant = (typeof TENANT_SUBDOMAINS)[number];

const TOKEN_COOKIE_NAME = 'nepcare_access_token';

/* ===================== UTILS ===================== */

function extractSubdomain(hostname: string): Tenant | null {
  const subdomain = hostname.split('.')[0];
  return TENANT_SUBDOMAINS.includes(subdomain as Tenant)
    ? (subdomain as Tenant)
    : null;
}

/* ===================== MIDDLEWARE ===================== */

export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') ?? '';
  const tenant = extractSubdomain(hostname);

  // Not a tenant subdomain → allow normally
  if (!tenant) {
    return NextResponse.next();
  }

  // Token already exists → allow
  const existingToken = request.cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (existingToken) {
    return NextResponse.next();
  }

  // Load credentials lazily (prevents edge undefined issues)
  const credentials = {
    email: process.env[`${tenant.toUpperCase()}_SYS_EMAIL`],
    password: process.env[`${tenant.toUpperCase()}_SYS_PASSWORD`],
  };

  if (!credentials.email || !credentials.password) {
    return NextResponse.redirect(new URL('/auth-error', request.url));
  }

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        tenant,
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return NextResponse.redirect(new URL('/auth-error', request.url));
    }

    const { token } = await response.json();

    if (!token) {
      return NextResponse.redirect(new URL('/auth-error', request.url));
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('Authorization', `Bearer ${token}`);

    // const res = NextResponse.next();
    // const res = NextResponse.next({
    //   request: {
    //     headers: requestHeaders,
    //   },
    // });
    // console.log(res)

    // res.cookies.set({
    //   name: TOKEN_COOKIE_NAME,
    //   value: token,
    //   httpOnly: true,
    //   secure: process.env.HOST_ENV === 'production',
    //   sameSite: 'lax',
    //   path: '/',
    // });
    // console.log(res.cookies)

    // // Pass tenant info to root page
    // res.headers.set('x-tenant', tenant);

    // return res;
    const nextResponse = NextResponse.next();
    nextResponse.headers.set('Authorization', `Bearer ${token}`);
    nextResponse.headers.set('x-tenant', tenant);

    // Set the cookie
    nextResponse.cookies.set({
      name: TOKEN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return nextResponse;
  } catch {
    return NextResponse.redirect(new URL('/auth-error', request.url));
  }
}

/* ===================== MATCHER ===================== */

// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
// };
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|auth-error).*)'],
};
