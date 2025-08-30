import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
