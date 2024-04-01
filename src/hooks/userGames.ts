import { GameQuery } from '../components/GameGrid';
import gameSvc, { Game } from '../services/game-service';
import useData from './useData';

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    gameSvc,
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
