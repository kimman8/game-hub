import useFetchGames from '@/hooks/useFetchGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
  const { error, games } = useFetchGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="15px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
