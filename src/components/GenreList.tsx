import useFetchGenres from '@/hooks/useFetchGenres';
import getCroppedImageURL from '@/services/img-url';
import { Text, Image, HStack, List, ListItem, Spinner } from '@chakra-ui/react';

const GenreList = () => {
  const { data, error, loading } = useFetchGenres();
  return (
    <List>
      {error && null}
      {loading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              src={getCroppedImageURL(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              objectFit="cover"
              borderRadius={8}
              mr={2}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
