import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as RouterLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import WebLogo from "../../assets/logo.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between" fontWeight={"500"}>
        <Box>
          <Image src={WebLogo} alt="logo" boxSize="63px" />
        </Box>
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }} >
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/infrastructure">Infrastructure</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </HStack>
        <Flex alignItems="center">
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <IoCallOutline size="24px" color="#EEAE1D" />
            <Text fontSize="lg" fontWeight="bold">+91 96013 13243</Text>
          </HStack>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} >
          <Stack as="nav" spacing={4} >
            <NavLink to="/" onClose={onClose}>Home</NavLink>
            <NavLink to="/about-us" onClose={onClose}>About Us</NavLink>
            <NavLink to="/infrastructure" onClose={onClose}>Infrastructure</NavLink>
            <NavLink to="/products" onClose={onClose}>Products</NavLink>
            <NavLink to="/contact-us" onClose={onClose}>Contact Us</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

const NavLink = ({ to, children, onClose }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{ textDecoration: "none", bg: "gray.200" }}
    _activeLink={{ color: "#EEAE1D" }}
    onClick={onClose} 
  >
    {children}
  </Link>
);

export default Header;
