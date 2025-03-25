import Banner from "@/components/Banner"
import Hero from "@/components/Hero"
import Narrative from "@/components/Narrative"
import Nav from "@/components/Nav"
import NewsArticle from "@/components/NewsArticle"
import Tokenomics from "@/components/Tokenomics"

const HomePage = () => {

  return (
    <main className="mx-auto w-full">
    <Nav/>
    <Hero/>
    <Narrative/>
    <Banner/>
    <Tokenomics/>
    <NewsArticle/>
    <footer className="bg-slate-950 max-sm:text-[10px] p-5">
      <div>
      <div
          id="title"
          className="font-bold text-center confirm_selection reveal"
        >
          <h1 className="text-7xl max-sm:text-5xl">XMOONEY</h1>
          <p>Earn Solana rewards by holding XMooney</p>
        </div>
        
        <div className="flex justify-center items-center">
          <Nav/>
        </div>
      </div>
      <small className="text-center block text-[8px]">© 2025 All rights reserved. </small>
    </footer>
    </main>
  )
}

export default HomePage