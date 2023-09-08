import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      {games?.map((game) => (
        <ul key={game.id}>
          <li>{game.name}</li>
        </ul>
      ))}
    </>
  );
};

export default GameGrid;
