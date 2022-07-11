import { useContext, useEffect, useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';

import { LibraryContext } from "./_app"
import { HeroSlider } from "../components"
import { GameList } from "../components/GameList"

type LCProps = {
  loading?: boolean
  err?: string | null
  list?: object[]
}

const Home: NextPage = () => {
  const library: LCProps = useContext(LibraryContext)
  const { loading, err, featured, list } = library


  useEffect(() => {

  }, [list, err])

  return (
    <div className="page">
      <Head>
        <title>Home | NG Staem Store</title>
        <meta name="description" content="Based on Zirnonia's 'I Design, You Build' series, the NG Steam Store fetches a custom API filled with Steam game content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {featured.length && <HeroSlider featured={featured} />}

      <Main>
        <GameList list={list} />
      </Main>

    </div>
  )
}

export default Home

const Main = styled.main`
  padding: 0 2rem 8rem;
  max-width: 1300px;
  margin: 150px auto 0;
`