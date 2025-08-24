import { Game } from '@/hooks/useFetchGames';
import { Card, CardBody, Heading, Image, VStack } from '@chakra-ui/react';

import PlatformIconList from './PlatformIconList';

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
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </VStack>
    </Card>
  );
};

export default GameCard;
