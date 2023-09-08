import { useEffect, useState } from "react";
import apiClient from "../services/api.client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface fetchAllGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<fetchAllGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
