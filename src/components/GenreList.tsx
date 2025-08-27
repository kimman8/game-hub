import useFetchGenres from '@/hooks/useFetchGenres';
import { Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data, error, loading } = useFetchGenres();
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
