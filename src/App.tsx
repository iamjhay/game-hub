import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
// import { Meta } from "./utils/Meta";
import { Helmet } from "react-helmet";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

// let metaThumbnail = "/home.png";

// const content = {
//   pageTitle: "GameHub - Home",
//   pageDescription:
//     "Game hub is a forum where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from.",
//   metaImageAlt:
//     "The image contains the logo of this website. The letter C with some sort of an elliptical shape at the bottom.",
// };

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Helmet>
        ‍<title>Pets - Products</title>
        <meta property="og:url" content="pets.abc" />
        <meta property="og:site_name" content="Pets - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pets - Products" />
        <meta property="og:description" content="Best Products for your pet" />
        <meta property="og:image" content="./home.png" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        <meta
          name="description"
          content="Find all the best quality products your pet may need"
        />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="Pets - Products" />
        <meta name="twitter:description" content="Best Products for your pet" />
        <meta name="twitter:image" content="./home.png" />‍
      </Helmet>
      ‍
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery?.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
