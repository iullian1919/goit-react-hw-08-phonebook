import React from 'react';
import BackDrop from 'components/Backdrop/Backdrop';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BackDrop>
      <InfinitySpin width="200" color="#b8684e" />
    </BackDrop>
  );
};
export default Loader;
