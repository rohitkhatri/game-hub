import genreSvc, { Genre } from '../services/genre-service';
import useData from './useData';

const useGenres = () => useData<Genre>(genreSvc);

export default useGenres;
