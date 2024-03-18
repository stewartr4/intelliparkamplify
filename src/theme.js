// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, red.500, red.900)',
        color: 'white', // Change text color as needed
      },
    },
  },
});

export default theme;
