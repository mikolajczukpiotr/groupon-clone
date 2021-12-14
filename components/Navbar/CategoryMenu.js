import React from "react";
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CategoryMenu = () => {
  return (
    <div className="ml-4">
      <Menu id="23455431">
        <MenuButton
          id="2345543"
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ border: "1px solid" }}
          _expanded={{ border: "1px solid" }}
          _focus={{ border: "1px solid" }}
        >
          Kategorie <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <Menu id="eloooohghghjghjghjghjghj" isLazy>
            <MenuButton px={4} py={2} id="23455433">
              Twoje miasto
            </MenuButton>
            <MenuList>
              <MenuItem>Czas Wolny</MenuItem>
              <MenuItem>Motoryzacja</MenuItem>
              <MenuItem>Remonty</MenuItem>
              <MenuItem>Restauracje</MenuItem>
              <MenuItem>Sklepy detaliczne</MenuItem>
              <MenuItem>Uroda i spa</MenuItem>
            </MenuList>
          </Menu>
          <Menu id="23455432">
            <MenuButton px={4} py={2} id="23425543">
              Hotele i Podróże
            </MenuButton>
            <MenuList>
              <MenuItem>Rezerwuj teraz!</MenuItem>
              <MenuItem>Spa & Wellness</MenuItem>
              <MenuItem>Hotele Premium</MenuItem>
              <MenuItem>Rodzinnie</MenuItem>
              <MenuItem>Miasta</MenuItem>
              <MenuItem>Na łonie natury</MenuItem>
            </MenuList>
          </Menu>
          <Menu id="234554333">
            <MenuButton px={4} py={2} id="12345543">
              Kody Rabatowe
            </MenuButton>
            <MenuList>
              <MenuItem>Zalando Lounge kod rabatowy</MenuItem>
              <MenuItem>Adidas kod rabatowy </MenuItem>
              <MenuItem>Kupony aliexpress</MenuItem>
              <MenuItem>Bonprix kod rabatowy</MenuItem>
              <MenuItem>Douglas kod rabatowy</MenuItem>
              <MenuItem>Kod rabatowy empik</MenuItem>
            </MenuList>
          </Menu>
          <Menu id="23455434">
            <MenuButton px={4} py={2} id="23455843">
              Bilety
            </MenuButton>
            <MenuList>
              <MenuItem>Wszystkie bilety</MenuItem>
              <MenuItem>Wydarzenia</MenuItem>
              <MenuItem>Teatry</MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
    </div>
  );
};

export default CategoryMenu;
