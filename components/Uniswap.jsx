import React from 'react'

const Uniswap = () => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center p-5">
        <h5 className='font-plat text-5xl'>SWAP</h5>
      <iframe
        src="https://app.uniswap.org/#/swap?inputCurrency=SOL&outputCurrency=BASE"
        className='w-[600px] h-[700px] border-2 max-sm:w-full rounded-lg'
      />
    </div>
  )
}

export default Uniswap