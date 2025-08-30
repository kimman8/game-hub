import useData from './useData';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useFetchGenres = () => useData<Genre>('/genres');

export default useFetchGenres;
