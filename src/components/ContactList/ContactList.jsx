import React from 'react';
import ContactsItem from '../ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/contacts/selectors';
import { fetchContacts } from 'store/contacts/operations';
import { useEffect } from 'react';
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterValue = useSelector(selectFilter);
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  return (
    <Container maxW="520">
      <TableContainer>
        <Table>
          <Thead>
            <Tr bg="#a2b5d5">
              <Th color="white">Name</Th>
              <Th color="white">number</Th>
              <Th color="white" textAlign="right">
                options
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {createRenderListContact().map(el => {
              return <ContactsItem key={el.id} contact={el} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ContactList;
