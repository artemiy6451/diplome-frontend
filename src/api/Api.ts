export type ApiListResponse<Type> = {
  total: number,
  items: Type[]
};

export type ApiPostMethods = 'GET' | 'PUT' | 'DELETE' | 'POST';

export class Api {
  readonly baseUrl: string;

  protected options: RequestInit;

  constructor(baseUrl: string, options: RequestInit = {}) {
    this.baseUrl = baseUrl;
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as object ?? {}),
      },
    };
  }

  protected handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return response.json() as Promise<T>;
    }
    return response.json().then((data) => {
      console.error('API Error:', data);
      return Promise.reject(data.error ?? response.statusText);
    });
  }

  protected async request<T>(
    uri: string,
    method: ApiPostMethods,
    data?: object
  ): Promise<T> {
    const requestBody = data ? JSON.stringify(data) : undefined;

    console.log(`Requesting: ${this.baseUrl + uri}`);
    console.log('Method:', method);
    console.log('Request Body:', requestBody);

    const response = await fetch(this.baseUrl + uri, {
      ...this.options,
      method,
      body: requestBody,
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    return this.handleResponse<T>(response);
  }
}
