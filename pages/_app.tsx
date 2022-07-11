import { createContext, useEffect, useState } from "react"
import type { AppProps } from 'next/app'
import supabase from "../utils/supabaseClient"
import Header from "../components/Header"
import '../styles/globals.css'

export const LibraryContext = createContext({})

function MyApp({ Component, pageProps }: AppProps) {
  const [steamLibrary, setSteamLibrary] = useState<any | null>([])
  const [featured, setFeatured] = useState<any | null>([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  const getSteamData = async () => {
    setLoading(true)
    const { data, error } = await supabase.from<any>("steam").select("*")
    console.log(`supabase data`, data);
    setSteamLibrary(data)
    setFeatured(data?.splice(0, 5))
    setErr(error)
    setLoading(false)
  }

  useEffect(() => {
    if (steamLibrary.length < 1) {
      getSteamData()
    }
  }, [])


  return <LibraryContext.Provider value={{ loading, err, featured, list: steamLibrary }}>
    <Header />
    <Component {...pageProps} />
  </LibraryContext.Provider>
}

export default MyApp
