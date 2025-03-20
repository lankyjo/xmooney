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
    <footer className="bg-slate-950 max-sm:text-[10px] flex justify-between p-5">
      <div>© 2025. All rights reserved.</div>
      <div>support@xmooneyeth.com</div>
    </footer>
    </main>
  )
}

export default HomePage