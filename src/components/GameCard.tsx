import { Game } from '@/hooks/useFetchGames';
import { Card, CardBody, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <VStack>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </VStack>
    </Card>
  );
};

export default GameCard;
