import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import gameSvc, { Game } from '../services/game-service';

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    gameSvc
      .getAll()
      .then((res) => {
        console.log(res.data);
        setGames(res.data.results);
        setError('');
      })
      .catch((e) => {
        setGames([]);
        setError(e.message);
      });
  }, []);

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
}
