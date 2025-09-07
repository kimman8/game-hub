import useFetchGenres, { Genre } from '@/hooks/useFetchGenres';
import getCroppedImageURL from '@/services/img-url';
import {
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from '@chakra-ui/react';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
            <Button
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
