// /**
//  * This is HttpService, function that wrap axios package
//  * With this function, caller of HttpService does not have to provide token
//  * since it is already called here by calling the Store
//  */

// import axios, { AxiosRequestConfig, Method, AxiosResponse, CancelTokenSource } from 'axios';
// import 'dotenv/config';
// import { IUserFinalData } from '../interfaces';

// interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
//   sourceToken?: CancelTokenSource;
//   /**
//    * default, false. Used to attach timeout in request
//    */
//   useBrowserTimeout?: boolean;
// }

// const getRequestOptions = (method: Method, data: any, headers: object | null, reqOptions?: AxiosRequestConfig) => {
//   let parseHeaders = {
//   }

//   if (headers) parseHeaders = { ...parseHeaders, ...headers };

//   let requestOptions: AxiosRequestConfig = {
//     method,
//     headers: parseHeaders,
//     data,
//     timeout: 60000,
//     validateStatus: (status) => status >= 200 && status <= 299,
//   };
//   if (reqOptions) requestOptions = { ...requestOptions, ...reqOptions };

//   return requestOptions;
// };

// export const getAuthenticatedHeader = () => {
//   const getReduxState: any = Store.getState();

//   let parseHeaders = {
//     'Content-Type': 'application/json',
//     Authorization: '',
//     rOId: '',
//     academicCareer: '',
//     institution: '',
//     roleName: '',
//     roleId: '',
//   };

//   const auth: IUserFinalData | null = getReduxState.auth?.res;

//   if (getReduxState && auth) {
//     parseHeaders.Authorization = `Bearer ${auth.token}`;
//     parseHeaders.rOId = auth.activeRoleOrganizationId || '';
//     parseHeaders.academicCareer = auth.activeRole?.academicCareer || '';
//     parseHeaders.institution = auth.activeRole?.institution || '';
//     parseHeaders.roleName = auth.activeRole?.name || '';
//     parseHeaders.roleId = auth.activeRole?.roleId || '';
//   }

//   return parseHeaders;
// }

// const getSignedRequestOptions = (method: Method, data: any, headers: object | null, reqOptions?: IExtendedAxiosRequestConfig) => {
//   let parseHeaders = getAuthenticatedHeader();

//   if (headers) parseHeaders = { ...parseHeaders, ...headers };

//   let requestOptions: IExtendedAxiosRequestConfig = {
//     method,
//     headers: parseHeaders,
//     data,
//     timeout: fetchTimeout,
//   };

//   if (reqOptions) requestOptions = { ...requestOptions, ...reqOptions };

//   return requestOptions;
// };

// const doFetch = async (requestOptions: IExtendedAxiosRequestConfig, url: string) => {
//   if (!window.navigator.onLine) throw new Error(internetConnectionProblem);

//   const _requestOptions: IExtendedAxiosRequestConfig = {
//     ...requestOptions,
//   };

//   const abort = _requestOptions.sourceToken || axios.CancelToken.source();
//   const timeout = _requestOptions.timeout;

//   let _setTimeout: NodeJS.Timeout | undefined;

//   if (!_requestOptions.useBrowserTimeout) delete _requestOptions.timeout;

//   if (timeout !== undefined) {
//     _setTimeout = setTimeout(() => {
//       abort.cancel(resTimeout)
//     }, timeout);
//   }

//   _requestOptions.cancelToken = abort.token;

//   return axios(url, _requestOptions)
//     .then(result => {
//       if (_setTimeout) clearTimeout(_setTimeout);

//       return result;
//     })
//     .catch(err => {
//       if (_setTimeout) clearTimeout(_setTimeout);

//       // here all status < 200 && status >= 300 handled
//       // here is info about http status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//       let errorMessage = err.response && err.response.data ? err.response.data : err.message;
//       errorMessage = errorMessage || JSON.stringify(err);

//       if (typeof errorMessage !== 'string') errorMessage = JSON.stringify(errorMessage);

//       // custom message if request timeout. In order to make the message more user friendly
//       if (err.code === 'ECONNABORTED') errorMessage = resTimeout;

//       throw new Error(errorMessage);
//     });
// };

// /**
//  * created for keepalive functionality only
//  * if no special need, ust HttpSerice (axios)
//  */
// const doNativeFetch = async (requestOptions: IExtendedAxiosRequestConfig, url: string) => {
//   if (!window.navigator.onLine) throw new Error(internetConnectionProblem);

//   const _requestOptions: IExtendedAxiosRequestConfig = {
//     ...requestOptions,
//   };

//   return fetch(url, {
//     ..._requestOptions,
//     keepalive: true,
//   })
//     .then(result => {
//       return result;
//     })
//     .catch(err => {

//       // here all status < 200 && status >= 300 handled
//       // here is info about http status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//       let errorMessage = err.response && err.response.data ? err.response.data : err.message;
//       errorMessage = errorMessage || JSON.stringify(err);

//       if (typeof errorMessage !== 'string') errorMessage = JSON.stringify(errorMessage);

//       // custom message if request timeout. In order to make the message more user friendly
//       if (err.code === 'ECONNABORTED') errorMessage = resTimeout;

//       throw new Error(errorMessage);
//     })
// };

// /**
//  * created for keepalive functionality only
//  * if no special need, use HttpSerice (axios)
//  */
// export const HttpServiceFetch = {
//   post(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<Response> {
//     const requestOptions = getSignedRequestOptions('POST', data, headers, reqOptions);
//     return doNativeFetch(requestOptions, url);
//   },
// }

// /**
//  * Usage:
//  *
//  * const functionName = async () => {
//  *    const headers = {
//  *      // put your additional config headers here,
//  *    };
//  *
//  *    const result = await HttpService.get<DataInterface>('api/url', headers);
//  *    console.log(result);
//  * }
//  *
//  */

// export const HttpService = {
//   get<T = any>(url: string, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getSignedRequestOptions('GET', null, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   post<T = any>(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getSignedRequestOptions('POST', data, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   //Sony
//   patch<T = any>(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getSignedRequestOptions('PATCH', data, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   put<T = any>(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getSignedRequestOptions('PUT', data, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   delete<T = any>(url: string, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getSignedRequestOptions('DELETE', null, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },

//   xget<T = any>(url: string, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getRequestOptions('GET', null, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   xpost<T = any>(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getRequestOptions('POST', data, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   xput<T = any>(url: string, data: any, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getRequestOptions('PUT', data, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
//   xdelete<T = any>(url: string, headers: object | null = null, reqOptions?: IExtendedAxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const requestOptions = getRequestOptions('DELETE', null, headers, reqOptions);
//     return doFetch(requestOptions, url);
//   },
// };

// export const HttpServiceMock = function HttpServiceMock<T>(result: T, timeout?: number, error?: string): Promise<T> {
//   return new Promise((resolve, reject) => {

//     window.setTimeout(() => {
//       if (!!error) reject(error.toString());
//       else resolve(result);
//     }, timeout || 1000)
//   })
// }
export {}