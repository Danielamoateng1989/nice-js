import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <ChakraProvider>
    <Auth0Provider
     domain="dev-thg2-lkh.us.auth0.com"
    clientId="eHiBx5Orwt6YHhZEC3bzC5fM2taCnpqj"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </ChakraProvider>,
  document.getElementById('root')
)
