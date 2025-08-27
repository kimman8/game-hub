import useData from './useData';
export interface Genre {
  id: number;
  name: string;
}

const useFetchGenres = () => useData<Genre>('/genres');

export default useFetchGenres;
