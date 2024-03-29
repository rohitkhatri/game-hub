import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GetAllResponse, HttpService } from './http-service';

export interface Game {
  id: string;
  name: string;
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
