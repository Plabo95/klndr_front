import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

/* Styles */
import './index.css'

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
  const theme = extendTheme({ colors })

  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

    root.render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
    );

