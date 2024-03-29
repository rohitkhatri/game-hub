import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GetAllResponse, HttpService } from './http-service';

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

class GameService extends HttpService {
  constructor() {
    super('games');
  }

  getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetAllResponse<Game>>> {
    return super.fetchAll<Game>(config);
  }
}

export default new GameService();
