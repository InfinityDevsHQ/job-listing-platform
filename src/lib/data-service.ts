import { cookies } from 'next/headers';

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

  const accessToken = cookies().get('accessToken')?.value;
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};

const handleResponseGracefully = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = 'An error occurred while fetching data';
    if (response.status >= 400 && response.status < 500) {
      // Client error
      const responseData = await response.json();
      errorMessage =
        responseData?.detail || responseData?.error || responseData?.message || errorMessage;
    } else if (response.status >= 500 && response.status < 600) {
      // Server error
      errorMessage = 'Server error, Something wrong with backend service';
    }
    throw new Error(errorMessage);
  }
  const data = await response.json();
  return data;
};

export const DataService = {
  get: async <T>(url: string, params: Record<string, string> = {}): Promise<T> => {
    const queryParams = constructQueryParams(params);
    const fullUrl = `${url}?${decodeURIComponent(queryParams)}`;
    const response = await fetch(fullUrl, { headers: getHeaders() });
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
