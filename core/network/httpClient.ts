const mode: 'dev' | 'prod' = 'dev';
let baseUrl;

const host = 'http://192.168.1.22:5139';

export class FetchError extends Error {
  constructor(
    error: string,
    public status: number,
    public statusText?: string
  ) {
    super(error);
  }
}

interface ClientProps {
  url: string;
  method?: string;
  isProtected?: boolean;
  payload?: any;
  multipartFormdata?: boolean;
  tenant?: string;
  tokenSource?: 'local' | 'session' | 'auto';
}

export default async function client<T>({
  url,
  method = 'GET',
  isProtected = true,
  payload,
  multipartFormdata = false,
  tenant,
  tokenSource = 'auto', // default behavior
}: ClientProps): Promise<T> {
  let token: string | null = null;
  let response;

  //  Base URL logic
  if (mode === 'prod') {
    baseUrl = host + '/api/local';
  } else {
    if (url.includes('Account/Login')) {
      baseUrl = host + '/';
    } else {
      baseUrl = host + '/api/';
    }
  }

  //  Token resolution logic
  if (mode !== 'prod' && isProtected) {
    switch (tokenSource) {
      case 'local':
        token = localStorage.getItem('token');
        break;

      case 'session':
        token = sessionStorage.getItem('token');
        break;

      case 'auto':
      default:
        // Define priority clearly (local first)
        token =
          localStorage.getItem('token') ?? sessionStorage.getItem('token');
        break;
    }
  }

  // if (isProtected && !token) {
  //   throw new FetchError('You are not authorized. Please login first.', 401);
  // }

  let options: RequestInit = {};

  //  Content type handling
  if (multipartFormdata) {
    options = { method };
  } else {
    options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  //  Attach headers
  options = {
    ...options,
    headers: {
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(tenant && { tenant }),
    },
  };

  //  Remove Authorization in prod
  if (mode === 'prod') {
    if ((options.headers as any)?.Authorization) {
      delete (options.headers as any).Authorization;
    }
  }

  //  Body handling
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    if (!multipartFormdata) {
      if (payload && !Array.isArray(payload)) {
        Object.keys(payload).forEach((key) => {
          if (key.endsWith('Id') && !Array.isArray(payload[key])) {
            payload[key] = Number(payload[key]) || payload[key];
          }
        });
      }

      options = { ...options, body: JSON.stringify(payload) };
    } else {
      options = { ...options, body: payload };
    }
  }

  try {
    response = await fetch(`${baseUrl}${url}`, options);

    const text = await response.text();

    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }

    if (!response.ok) {
      throw new FetchError(
        data?.message ?? 'Something went wrong',
        response.status,
        response.statusText
      );
    }

    return data as T;
  } catch (error: any) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new FetchError('Network Error', 0, 'Network request failed');
    }
    throw error;
  }
}
