export abstract class APIHelper {
    private apiUrl: string;
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }
    protected fetch<T, P extends Record<string, string>>(input: RequestInfo, params?: P, init?: RequestInit | undefined) {
        const url = new URL(`${this.apiUrl}${input}`);
        if (params)
            Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
        return fetch(url.toString(), init)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<T>
            })
    }
    protected get<T, P extends Record<string, string> = Record<string, string>>(input: RequestInfo, params?: P) {
        return this.fetch<T, P>(input, params, { method: 'GET' });
    }
}