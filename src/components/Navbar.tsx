import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Flex alignItems={"center"}>
        <Box>
          <Image src={logo} boxSize="60px" />
        </Box>
        <SearchInput onSearch={onSearch} />
      </Flex>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
