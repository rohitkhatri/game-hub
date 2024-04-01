import platformSvc, { Platform } from '../services/platform-service';
import useData from './useData';

const usePlatforms = () => useData<Platform>(platformSvc);

export default usePlatforms;
