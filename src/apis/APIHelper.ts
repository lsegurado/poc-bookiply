import { ApiParamsType } from "../types";

export abstract class APIHelper {
    private apiUrl: string;
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }
    protected fetch<T, P extends ApiParamsType>(input: RequestInfo, params?: P, init?: RequestInit | undefined) {
        const url = new URL(`${this.apiUrl}${input}`);
        if (params)
            Object.entries(params).forEach(([key, value]) => {
                if (Array.isArray(value))
                    value.forEach(x => url.searchParams.append(key, x.toString()))
                else if (value)
                    url.searchParams.append(key, value.toString())

            });
        return fetch(url.toString(), init)
            .then(async response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const total = Number(response.headers.get('X-Total-Count'));
                const value: T = await response.json();
                return {
                    value,
                    total
                }
            })
    }
    /**
     * A strongly typed get fetch call
     * @param input The url of the api 
     * @param params Parameters to send
     * @returns A promise with the value and the total amount (from the header)
     */
    protected get<T, P extends ApiParamsType>(input: RequestInfo, params?: P) {
        return this.fetch<T, P>(input, params, { method: 'GET' });
    }
}