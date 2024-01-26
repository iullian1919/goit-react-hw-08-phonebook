import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logIn } from 'store/auth/operations';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectError, selectFetching } from 'store/auth/selectors';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const fetching = useSelector(selectFetching);
  const handleNavigate = () => {
    navigate('/register', { replace: true });
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleInput = ev => {
    switch (ev.target.name) {
      case 'email':
        setEmail(ev.target.value);
        break;

      case 'password':
        setPassword(ev.target.value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logIn(user));
  };
  return (
    <Container pt={30}>
      <form onSubmit={handleSubmit}>
        <Box
          padding="15px"
          maxWidth={500}
          border="2px solid #3b3b3b4e"
          borderRadius="12"
        >
          <Text fontSize="3xl" fontWeight={500}>
            Login
          </Text>
          {error.length > 0 && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <FormControl isRequired>
            <FormLabel fontSize={24}>Your email</FormLabel>
            <Input onInput={handleInput} name="email" type="email" />
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl mb={15} isRequired>
            <FormLabel fontSize={24}>Your password</FormLabel>
            <InputGroup size="md">
              <Input
                minLength={8}
                name="password"
                onInput={handleInput}
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button width={73} type="submit" colorScheme="green">
            {fetching ? <Spinner /> : 'Login'}
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Text
              cursor="pointer"
              color="blue"
              as="span"
              onClick={handleNavigate}
            >
              Do you not have an account?
            </Text>
          </Box>
        </Box>
      </form>
    </Container>
  );
};
