import gameSvc, { Game } from '../services/game-service';
import { Genre } from '../services/genre-service';
import { Platform } from '../services/platform-service';
import useData from './useData';

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    gameSvc,
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
