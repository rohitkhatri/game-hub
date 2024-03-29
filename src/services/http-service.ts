import { AxiosResponse, AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

export interface GetAllResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export class HttpService {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async fetchAll<T>(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetAllResponse<T>>> {
    return apiClient.get<GetAllResponse<T>>(this.endpoint, config);
  }
}

export function create(endpoint: string) {
  return new HttpService(endpoint);
}
