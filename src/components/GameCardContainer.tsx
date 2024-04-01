import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      width={{
        lg: '300px',
        xl: '250px',
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}
