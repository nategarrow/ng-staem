import Head from 'next/head'
import styled from 'styled-components';

import supabase from "../utils/supabaseClient"
import { HeroSlider } from "../components"
import { GameList } from "../components/GameList"

type GameType = {
  id: number
  link: string
  image: string
  title: string
  price: number
  tags: string[]
  platforms: string[]
  genre: string
}
type HomeProps = {
  featured: GameType[]
  games: GameType[]
  error: string
}

const Home = (props: HomeProps) => {
  const { featured, games, error } = props

  return (
    <div className="page">
      <Head>
        <title>Home | NG Staem Store</title>
        <meta name="description" content="Based on Zirnonia's 'I Design, You Build' series, the NG Steam Store fetches a custom API filled with Steam game content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {featured.length && <HeroSlider featured={featured} />}

      <Main>
        <GameList list={games} />
      </Main>

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const { data, error } = await supabase.from<any>("steam").select("*")
  const featured = data?.splice(0, 5)

  return {
    props: {
      featured,
      games: data,
      error
    }, // will be passed to the page component as props
  }
}

const Main = styled.main`
  padding: 0 2rem 8rem;
  max-width: 1300px;
  margin: 150px auto 0;
`