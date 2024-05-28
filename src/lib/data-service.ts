import { getToken } from './auth-token';

interface IHttpError<T> {
  status: number;
  code?: number;
  result?: T;
}

export class HttpError<T> extends Error implements IHttpError<T> {
  status: number;
  code?: number;
  result?: T;

  constructor(message: string, httpResult: IHttpError<T>, options?: ErrorOptions) {
    super(message, options);
    this.status = httpResult.status;
    this.code = httpResult.code;
    this.result = httpResult.result;
  }
}

const DEFAULT_QUERY_PARAMS: Record<string, string> = {};

// Helper function to construct query parameters
function constructQueryParams(params?: Record<string, string>): string {
  const queryParams = new URLSearchParams({ ...DEFAULT_QUERY_PARAMS, ...params });

  return queryParams.toString();
}

const getHeaders = () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const accessToken = getToken();
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};

const handleResponseGracefully = async (response: Response) => {
  const responseData = await response.json();
  if (!response.ok) {
    const errorMessage = responseData?.detail || responseData?.error || responseData?.message;

    throw new HttpError(errorMessage, {
      status: response.status,
      code: responseData.code,
      result: responseData.result,
    });
  }
  return responseData;
};

export const DataService = {
  get: async <T>(url: string, params: Record<string, string> = {}): Promise<T> => {
    const queryParams = constructQueryParams(params);
    const fullUrl = `${url}?${decodeURIComponent(queryParams)}`;
    const headers = getHeaders();
    const response = await fetch(fullUrl, { headers });
    return handleResponseGracefully(response);
  },

  post: async <T>(
    url: string,
    data?: Record<string, any>,
    params: Record<string, string> = {}
  ): Promise<T> => {
    const queryParams = constructQueryParams(params);
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  put: async <T>(url: string, data: Record<string, any>): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  delete: async <T>(url: string): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: 'DELETE',
      headers: getHeaders(),
    });

    return handleResponseGracefully(response);
  },
};
