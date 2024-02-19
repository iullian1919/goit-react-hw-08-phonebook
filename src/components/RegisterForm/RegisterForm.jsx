import React from 'react';
import {
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/operations';
import { useSelector } from 'react-redux';
import { selectFetching } from 'store/auth/selectors';

export const RegisterForm = () => {
  const fetching = useSelector(selectFetching);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login', { replace: true });
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleInput = ev => {
    const { name } = ev.target;
    switch (name) {
      case 'name':
        setName(ev.target.value);
        break;
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
    const user = { name, email, password };
    dispatch(register(user));
    ev.target.reset();
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
            Create account
          </Text>
          <FormControl isRequired>
            <FormLabel fontSize={24}>Your name</FormLabel>
            <Input
              placeholder="Adrian Cross"
              type="text"
              name="name"
              onInput={handleInput}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={24}>Your email</FormLabel>
            <Input
              placeholder="across@mail.com"
              type="email"
              name="email"
              onInput={handleInput}
            />
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

          <Button width={91} colorScheme="green" type="submit">
            {fetching ? <Spinner /> : 'Register'}
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Text
              as="span"
              color="blue"
              cursor="pointer"
              onClick={handleNavigate}
            >
              Have you already registered?
            </Text>{' '}
          </Box>
        </Box>
      </form>
    </Container>
  );
};
