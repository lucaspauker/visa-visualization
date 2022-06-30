import React from 'react';

import App from '../components/App';
import { Auth0Provider } from "@auth0/auth0-react";

const IndexPage = () => (
  <Auth0Provider
    domain="dev-lcrt6eds.us.auth0.com"
    clientId="VTUyceSP3pRytyixJ6N3DuCFDb06ya0l"
    redirectUri={"http://localhost:8000"}
  >
    <App />
  </Auth0Provider>
);

export default IndexPage;
