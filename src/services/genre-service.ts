import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GetAllResponse, HttpService } from './http-service';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

class GenreService extends HttpService {
  constructor() {
    super('genres');
  }

  getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetAllResponse<Genre>>> {
    return super.fetchAll<Genre>(undefined, config);
  }
}

export default new GenreService();
