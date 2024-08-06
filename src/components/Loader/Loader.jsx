import React from 'react';
import { Spinner, Box, Center } from '@chakra-ui/react';

const Loader = ({ size = 'xl', color = '#EEAE1D' }) => {
  return (
    <Center height="100vh">
      <Box>
        <Spinner size={size} color={color} />
      </Box>
    </Center>
  );
};

export default Loader;
