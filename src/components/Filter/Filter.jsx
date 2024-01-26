import React from 'react';
import { filterUse } from 'store/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { Container, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = ev => {
    const text = ev.target.value;
    dispatch(filterUse(text));
  };
  return (
    <Container mb={15}>
      <FormControl alignItems="center">
        <FormLabel>Find contacts by name</FormLabel>
        <Input
          placeholder="search"
          type="text"
          name="filter"
          onChange={handleInput}
        />
      </FormControl>
    </Container>
  );
};

export default Filter;
