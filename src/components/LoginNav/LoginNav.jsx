import React from 'react';
import { EditIcon, LockIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginNav = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup gap="2">
      <Button
        onClick={() => {
          navigate('/login');
        }}
        leftIcon={<LockIcon />}
      >
        {' '}
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/register');
        }}
        variant="outline"
        colorScheme="white"
        leftIcon={<EditIcon color="red" />}
      >
        Sign In
      </Button>
    </ButtonGroup>
  );
};

export default LoginNav;
