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
        <title>GameHub</title>
        <meta name="title" content="GameHub" />
        <meta
          name="description"
          content="Game hub is a platform where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://game-fw56u4ab3-iamjhay.vercel.app/"
        />
        <meta property="og:title" content="GameHub" />
        <meta
          property="og:description"
          content="Game hub is a platform where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://game-fw56u4ab3-iamjhay.vercel.app/"
        />
        <meta property="twitter:title" content="GameHub" />
        <meta
          property="twitter:description"
          content="Game hub is a platform where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
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
