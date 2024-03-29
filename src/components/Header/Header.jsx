import React from 'react';
import { Container, Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import LoginNav from '../LoginNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isSmallerThan400] = useMediaQuery('(min-width: 400px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setFontsize = () => {
    return isSmallerThan400 ? '6xl' : '3xl';
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/', { replace: true });
  };
  return (
    <header
      style={{
        backgroundColor: '#a2b5d5',
        position: 'fixed',
        top: 0,
        width: '100%',
      }}
    >
      <Container
        borderTopRadius="none"
        borderBottomRadius="lg"
        maxW="1000px"
        color="white"
      >
        <Flex alignItems="center">
          <Text
            _hover={{ textShadow: ' 4px 4px 2px rgba(0,0,0,0.6)' }}
            transition="250ms linear"
            fontSize={setFontsize()}
            cursor="pointer"
            onClick={handleNavigate}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            Phonebook
          </Text>

          <Spacer />
          {isLoggedIn ? <UserMenu size={isSmallerThan400} /> : <LoginNav />}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
