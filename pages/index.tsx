import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, ButtonGroup } from '@chakra-ui/react'
import UnAuthNavbar from '../components/layouts/UnAuthNavbar'
import Body from '../components/Home/Body'

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Google Classes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* navbar */}
        <UnAuthNavbar />

        {/* body */}
        <Body />

      </main>

    </div>
  )
}

export default Home
