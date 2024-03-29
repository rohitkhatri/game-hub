import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import gameSvc, { Game } from '../services/game-service';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    gameSvc
      .getAll({ signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setGames(res.data.results);
        setError('');
      })
      .catch((e) => {
        if (e instanceof CanceledError) {
          return;
        }
        setGames([]);
        setError(e.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
