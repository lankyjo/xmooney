const TokenItems = ({image, text}) => {
  return (
    <div className="space-y-2">
        <div className="max-w-lg overflow-hidden rounded-xl">
        <img src={image}/>
        </div>
        <h5 className="text-3xl max-md:text-xl text-center font-bold text-black">{text}</h5>
    </div>
  )
}

export default TokenItems