/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AxiosRequestConfig, CanceledError } from 'axios';
import { GetAllFunction } from '../services/http-service';

const useData = <T>(
  service: object & GetAllFunction<T>,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      setData([]);
      const controller = new AbortController();

      service
        .getAll({ signal: controller.signal, ...requestConfig })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
