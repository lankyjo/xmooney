import React from 'react'

const Uniswap = () => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center p-5">
        <h5 className='font-plat text-5xl'>SWAP</h5>
      <iframe
        src="https://app.uniswap.org/#/swap?inputCurrency=SOL&outputCurrency=BASE"
        className='w-[600px] h-[700px] max-sm:w-full'
        style={{ border: "none", borderRadius: "10px" }}
      />
    </div>
  )
}

export default Uniswap