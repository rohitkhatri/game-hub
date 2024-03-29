import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../services/game-service';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card border={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
