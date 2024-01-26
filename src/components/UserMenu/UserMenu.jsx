import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react';

import { FaRegUser } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';
import { useSelector } from 'react-redux';
const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Box display="flex" alignItems="center" gap={10}>
      <Text fontWeight="500" fontSize="2xl">
        Hello, {user.email}
      </Text>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        >
          <FaRegUser />
        </MenuButton>
        <Portal>
          <MenuList bg="white">
            <MenuItem onClick={handleClick} icon={<IoIosLogOut />} color="red">
              <div>Log out</div>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Box>
  );
};

export default UserMenu;
