'use client'
import { useEffect, useState } from "react"
import { Cabecalho } from "./Components/Cabecalho"
import Temporizer from "./Components/Temporizer"



export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const valorSalvo = localStorage.getItem("logado")
    if(valorSalvo == "true"){
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("logado", String(isLoggedIn));  
  }, [isLoggedIn]);

  return (
    <>
      <Cabecalho />
      <iframe style={{ borderRadius: "12px", marginTop: "80px" }} src="https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu?utm_source=generator&theme=0" width="500px" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
      <Temporizer/>
    </>
  )
}