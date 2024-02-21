import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/operations';
import { selectContacts } from 'store/contacts/selectors';
import PropTypes from 'prop-types';

import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const ContactForm = ({ close }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');

  const handleInput = ev => {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
      return;
    }
    if (ev.target.name === 'phone') {
      setPhone(ev.target.value);
      return;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name,
      number: phone,
    };
    if (
      contacts.find(
        el => el.name.toLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(` ${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    close();
    ev.target.reset();
  };

  return (
    <form
      style={{
        maxWidth: '650px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: isLargerThan400 ? '20px' : '10px',
      }}
      onSubmit={handleSubmit}
    >
      <Flex direction="column" align="center">
        <FormControl isRequired="true">
          <FormLabel>Name</FormLabel>
          <Input required name="name" type="text" onInput={handleInput} />
        </FormControl>
        <FormControl isRequired="true">
          <FormLabel>Phone number</FormLabel>
          <Input required name="phone" type="phone" onInput={handleInput} />
        </FormControl>
        <Flex justify="space-between" ml={5}>
          <Button colorScheme="blue" mt={5} type="submit">
            Add contact
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

ContactForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ContactForm;
