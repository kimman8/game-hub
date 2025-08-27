import useFetchGenres from '@/hooks/useFetchGenres';
import { Text } from '@chakra-ui/react';

const GenreList = () => {
  const { genres, error, loading } = useFetchGenres();
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
