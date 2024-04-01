import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GetAllResponse, HttpService } from './http-service';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

class PlatformService extends HttpService {
  constructor() {
    super('platforms');
  }

  getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetAllResponse<Platform>>> {
    return super.fetchAll<Platform>('/lists/parents', config);
  }
}

export default new PlatformService();
