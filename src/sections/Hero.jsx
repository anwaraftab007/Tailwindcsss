import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { useState } from "react"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-400">Our Summer Collecton</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10">The New Arrival</span><br />
          <span className="text-red-500 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-monsterrat text-slate-800 text-lg text-wrap leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label='Shop Now' iconUrl={arrowRight}/>
        <div className="flex justify-center items-start flex-wrap w-full mt-20 gap-16  ">
        {statistics.map((stats) => (
          <div key={stats.label}>
            <p className="text-4xl font-bold font-palanquin">{stats.value}</p>
            <p className="leading-7 text-slate-800">{stats.label}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen b max-xl:py-40 max-xl:bg-white bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} className="object-contain relative" 
        />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard 
            imgURL={shoe}
            changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
      
      </div>
    </section>
  )
}

export default Hero