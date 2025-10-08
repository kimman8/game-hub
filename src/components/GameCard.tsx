import { Game } from '@/hooks/useFetchGames';
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react';

import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageURL from '@/services/img-url';
import Emoji from './Emoji';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <VStack>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
      </VStack>
    </Card>
  );
};

export default GameCard;
