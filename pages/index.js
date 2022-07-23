import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Results } from '../components/Results'
import requests from '../utils/request'

export default function Home({ results }) {
  return (
    <div >
      <Head>
        <title>Starr</title>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Header/>
        <Nav/>
        <Results results={results}/>
      </main>
      
    </div>
  )
}
export async function getServerSideProps(context) {
  let genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || 
    requests.Trending.url}`).then(response => response.json());
  return {
    props: {
      results: request.results
    }, 
  }
}