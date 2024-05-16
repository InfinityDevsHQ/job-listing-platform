import { getToken } from './auth-token';

const DEFAULT_QUERY_PARAMS: Record<string, string> = {};

// Helper function to construct query parameters
function constructQueryParams(params?: Record<string, string>): string {
  const queryParams = new URLSearchParams({ ...DEFAULT_QUERY_PARAMS, ...params });

  return queryParams.toString();
}

const getHeaders = async () => {
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };

  const accessToken = await getToken();
  if (accessToken) {
    headers['authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};

const handleResponseGracefully = async (response: Response) => {
  const responseData = await response.json();
  if (!response.ok) {
    const errorMessage = responseData?.detail || responseData?.error || responseData?.message;
    throw new Error(errorMessage);
  }
  return responseData;
};

export const DataService = {
  get: async <T>(url: string, params: Record<string, string> = {}): Promise<T> => {
    const queryParams = constructQueryParams(params);
    const fullUrl = `${url}?${decodeURIComponent(queryParams)}`;
    const headers = await getHeaders();
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
      headers: await getHeaders(),
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  put: async <T>(url: string, data: Record<string, any>): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(data),
    });

    return handleResponseGracefully(response);
  },

  delete: async <T>(url: string): Promise<T> => {
    const queryParams = constructQueryParams();
    const fullUrl = `${url}?${queryParams}`;

    const response = await fetch(fullUrl, {
      method: 'DELETE',
      headers: await getHeaders(),
    });

    return handleResponseGracefully(response);
  },
};
