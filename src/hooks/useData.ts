import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import { GetAllFunction } from '../services/http-service';

const useData = <T>(service: object & GetAllFunction<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    service
      .getAll({ signal: controller.signal })
      .then(({ data }) => {
        setError('');
        setData(data.results);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        if (e instanceof CanceledError) {
          return;
        }

        setData([]);
        setError(e.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [service]);

  return { data, error, isLoading };
};

export default useData;
