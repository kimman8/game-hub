import useFetchGames from '@/hooks/useFetchGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '@/hooks/useFetchGenres';
import { Platform } from '@/hooks/useFetchPlatforms';
import { GameQuery } from '@/App';

interface GameGridProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: GameGridProps) => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20,
  ];
  const { error, data, loading } = useFetchGames(gameQuery);
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
