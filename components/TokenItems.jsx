const TokenItems = ({image, text}) => {
  return (
    <div className="space-y-2 flex flex-col items-center">
        <div className="max-w-lg overflow-hidden rounded-xl">
        <img loading="lazy" className="w-full h-full object-center" src={image}/>
        </div>
        <h5 className="text-3xl max-md:text-base text-center font-bold text-black">{text}</h5>
    </div>
  )
}

export default TokenItems