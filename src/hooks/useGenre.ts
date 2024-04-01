import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import genreSvc, { Genre } from '../services/genre-service';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    genreSvc
      .getAll({ signal: controller.signal })
      .then(({ data }) => {
        setError('');
        setGenres(data.results);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) {
          return;
        }

        setGenres([]);
        setError(e.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
