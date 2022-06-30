import React, { useState, useEffect } from 'react';

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
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  //const { user, isAuthenticated, isLoading } = useAuth0();
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return(
      "Loading.."
    );
  }
  if (!isAuthenticated) {
    return (
      <div id="App">
        <Layout>
          <Navbar loggedIn={false}/>
          <Brands />
          <Team />
          <Footer />
        </Layout>
      </div>
    );
  }
  return (
    isAuthenticated &&(
      <div id="App">
        <Layout>
          <Navbar loggedIn={true}/>
          <Header />
          <About />
          <Brands />
          <Team />
          <Footer />
        </Layout>
      </div>
    )
  );
}

export default App;
