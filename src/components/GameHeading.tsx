import { Heading } from '@chakra-ui/react';
import { GameQuery } from './GameGrid';

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" fontSize="3xl">
      {heading}
    </Heading>
  );
}
