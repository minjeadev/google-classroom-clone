import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import UnAuthNavbar from '../components/layouts/UnAuthNavbar'
import Body from '../components/Home/Body'
import AuthNavbar from '../components/layouts/AuthNavbar'
import { useAuth } from '../context/AuthUserContext';
import LoadingScreen from '../components/Global/LoadingScreen';

const Home: NextPage = () => {

  const { authUser, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />
  } else {

    return (
      <div>

        <Head>
          <title>Google Classes</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* navbar */}
          {!authUser && <UnAuthNavbar />}
          {authUser && <AuthNavbar />}

          {/* body */}
          <Body />
        </main>

      </div>
    )
  }
}


export default Home
