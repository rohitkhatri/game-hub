import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import gameSvc, { Game } from '../services/game-service';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    gameSvc
      .getAll({ signal: controller.signal })
      .then(({ data }) => {
        setError('');
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) {
          return;
        }

        setGames([]);
        setError(e.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
