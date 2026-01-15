import Axios, { AxiosRequestConfig } from 'axios';

// 1. Create a default instance
export const AXIOS_INSTANCE = Axios.create({ baseURL: '' });

// 2. Export configuration functions for the apps to use
export const configureApi = (config: { baseUrl?: string; getToken?: () => string | Promise<string> }) => {
    if (config.baseUrl) {
        AXIOS_INSTANCE.defaults.baseURL = config.baseUrl;
    }

    // Add an interceptor to inject the token on every request
    if (config.getToken) {
        AXIOS_INSTANCE.interceptors.request.use(async (req) => {
            const token = await config.getToken!();
            if (token) {
                req.headers.Authorization = `Bearer ${token}`;
            }
            return req;
        });
    }
};

// 3. The function Orval calls
export const customInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
        ...config,
        ...options,
        cancelToken: source.token,
    }).then(({ data }) => data);

    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled');
    };

    return promise;
};
