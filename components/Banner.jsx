import React from 'react'

const Banner = () => {
  return (
    <section className='py-16 px-5 flex justify-center items-center'>
        <div className='max-w-xl w-full flex flex-col gap-y-10 text-center p-16 bg-gray-400/20 backdrop-blur-lg rounded-lg'>
            <h2 className='confirm_selection text-4xl max-sm:text-2xl uppercase font-bold'>
            Elon's stable coin
            </h2>
            <div className='flex gap-8 justify-center text-base max-sm:text-xs text-nowrap uppercase'>
                <div>Hodl XMooney</div>
                <div>Receive Free sol</div>
            </div>
        </div>
    </section>
  )
}

export default Banner