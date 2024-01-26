import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Container, useDisclosure } from '@chakra-ui/react';
import { AddContactModal } from 'components/AddContactModal/AddContactModal';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'store/contacts/selectors';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container pt={30} maxW="1000px">
      <Button
        display="block"
        ml="auto"
        leftIcon={<AddIcon />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Add Contact
      </Button>
      <AddContactModal isOpen={isOpen} onClose={onClose} />
      <h2
        style={{
          fontSize: '40px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
