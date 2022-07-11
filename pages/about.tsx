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
      <Main className="container">
        <p>Based on Zirnonia's <a href="https://blog.zernonia.com/i-design-you-build-frontend-challenge-4-supabase-version">"I Design, You Build! - Frontend Challenge #4 (Supabase version)"</a>. While the official challenge ended months before I took a crack at it, I decided to make NG Staem as a practice React/Next.JS project using TypeScript</p>

        <p>The purpose of this challenge was to connect to the supplied Supabase database, fetch the game information, and display the content. </p>

        <p><a href="https://www.figma.com/file/v9WwrvuGFZHVLy4z3wxHGi/STAEM?node-id=16%3A5">Figma Design file</a> (courtesy of Zirnonia): </p>

        <hr className="long" />

        <p>Some of the highlights of this project include:</p>
        <ul>
          <li>TypeScript - Still learning, but quickly catching on!</li>
          <li>The latest React/Next.js versions - React v18.2 &amp; Next.js v12.2</li>
          <li>API Integration - Zirnonia supplied a pre-existing Supabase instance that included all of the game information, including images, titles, prices, etc. This data is retreived prior to page load via getStaticProps().</li>
          <li>Greensock (GSAP) Animations</li>
          <li>Netlify Deployment</li>
        </ul>

        <p>NPM packages:</p>
        <ul>
          <li>Styled Components</li>
          <li>Swiper React (Featured Slider)</li>
        </ul>
      </Main>
    </div>
  )
}

export default AboutPage

const Main = styled.main`
  
  p {
    margin-top: 1.5rem;
    margin-bottom: .2rem;
  }
  ul {
    margin-top: .5rem;
  }
`