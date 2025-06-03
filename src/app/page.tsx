import { Cabecalho } from "./Components/Cabecalho"
import Temporizer from "./Components/Temporizer"

export default function Home() {
  return (
    <>
      <Cabecalho />
      <iframe style={{ borderRadius: "12px", marginTop: "80px" }} src="https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu?utm_source=generator&theme=0" width="500px" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <Temporizer/>
    </>
  )
}
