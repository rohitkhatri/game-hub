import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GetAllResponse, HttpService } from './http-service';
import { Platform } from './platform-service';

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

class GameService extends HttpService {
  constructor() {
    super('games');
  }

  getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetAllResponse<Game>>> {
    return super.fetchAll<Game>(undefined, config);
  }
}

export default new GameService();
