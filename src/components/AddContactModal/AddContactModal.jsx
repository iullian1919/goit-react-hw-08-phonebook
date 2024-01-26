import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
  ModalBody,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export function AddContactModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Contact</ModalHeader>

        <ModalBody>
          <ModalCloseButton />
          <ContactForm close={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

AddContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddContactModal;
