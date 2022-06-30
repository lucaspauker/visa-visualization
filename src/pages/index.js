import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import LoginButton from '@common/LoginButton';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

import { Auth0Provider } from "@auth0/auth0-react";

const IndexPage = () => (
  <Auth0Provider
    domain="dev-lcrt6eds.us.auth0.com"
    clientId="VTUyceSP3pRytyixJ6N3DuCFDb06ya0l"
    redirectUri={window.location.origin}
  >
    <Layout>
      <Navbar />
      <Header />
      <About />
      <Brands />
      <Team />
      <Footer />
    </Layout>
  </Auth0Provider>
);

export default IndexPage;
