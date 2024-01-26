import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import { Button, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <Tr>
      <Td>{contact.name}</Td>
      <Td>{contact.number}</Td>
      <Td textAlign="right">
        <Button colorScheme="red" onClick={handleDelete}>
          <DeleteIcon color="inherit" />
        </Button>
      </Td>
    </Tr>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
