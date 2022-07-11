import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';

const AboutPage: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>About | NG Staem Store</title>
        <meta name="description" content="Based on Zirnonia's 'I Design, You Build' series, the NG Steam Store fetches a custom API filled with Steam game content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <p>Based on Zirnonia's <a href="https://blog.zernonia.com/i-design-you-build-frontend-challenge-4-supabase-version">"I Design, You Build! - Frontend Challenge #4 (Supabase version)"</a>, NG Staem is my unofficial entry in the project. While the official challenge ended months before I took a crack at it, I decided to make NG Staem as a practice React/Next.JS project</p>

      </main>
    </div>
  )
}

export default AboutPage