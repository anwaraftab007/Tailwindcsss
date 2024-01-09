import { star } from "../assets/icons"

const PopularProductCard = ({imgUrl , name , price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgUrl} alt={name} className="w-[280px] h-[280px]"/>
        <div className="mt-8 justify-start gap-2 5">
        
            <p className="text-xl text-gray-500 flex justify-start"><img src={star} alt="rating"
            width={24} height={24} />&nbsp;&nbsp;(4.5)</p>
            <h3 className="mt-3 text-xl xl:text-2xl font-semibold leading-normal">{name}</h3><br />
            <p className="mt-2 font-semibold text-red-500 text-xl xl:text-2xl leading-normal">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard