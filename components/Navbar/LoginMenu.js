import React from "react";
import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LoginMenu = () => {
  return (
    <div className="mr-auto">
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ border: "1px solid" }}
          _expanded={{ border: "1px solid" }}
          _focus={{ border: "1px solid" }}
        >
          Zaloguj się <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <div className="flex flex-col">
            <Input className="m-2" width="20rem" placeholder="e-mail" />
            <Input
              className="m-2"
              width="20rem"
              type="password"
              placeholder="hasło"
            />
            <Button width="20rem">Zaloguj sie</Button>
          </div>
          <MenuItem className="text-sm">Nie pamietam hasła</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default LoginMenu;
