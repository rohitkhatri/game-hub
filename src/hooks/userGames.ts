import gameSvc, { Game } from '../services/game-service';
import { Genre } from '../services/genre-service';
import useData from './useData';

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(gameSvc, { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
