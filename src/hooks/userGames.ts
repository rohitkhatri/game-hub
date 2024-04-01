import gameSvc, { Game } from '../services/game-service';
import useData from './useData';

const useGames = () => useData<Game>(gameSvc);

export default useGames;
