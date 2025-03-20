import TokenItems from "./TokenItems"

const Tokenomics = () => {
  return (
    <section className="bg-white px-5 py-5 pt-20 flex flex-col gap-y-10 items-center">
        <div>
        <h4 className="text-black text-center text-5xl max-sm:text-4xl font-bold">TOKENOMICS</h4>
        <p className="text-center text-black max-sm:text-[10px]">0x21cD589a989615A9e901328D3c089bbca16d00b2</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
            <TokenItems image={'/supply-img.avif'} text={'Supply - 1B $XMOONEY'}/>
            <TokenItems image={'/tax-img.avif'} text={'10% TAX'}/>
            <TokenItems image={'/renounced-img.avif'} text={'RENOUNCED OWNERSHIP'}/>
            <TokenItems image={'/burned-img.avif'} text={'LIQUIDITY LOCKED'}/>
        </div>


    </section>
  )
}

export default Tokenomics