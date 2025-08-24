import useFetchGames from '@/hooks/useFetchGames';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
  const { error, games } = useFetchGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
