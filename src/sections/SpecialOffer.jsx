import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-5xl capitalize font-bold lg:max-w-lg"><span className="text-red-500">Special </span>Offer
        </h2>
        <p className="lg:max-w-lg font-monsterrat text-slate-800 text-lg text-wrap leading-7 mt-7 ">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="lg:max-w-lg font-monsterrat text-slate-800 text-lg text-wrap leading-7 mt-7 mb-4">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop Now' iconUrl={arrowRight}/>
          <Button label='Learn more'
          backgroundColor="bg-white"
          borderColor="border-gray-500"
          textColor="text-gray-500"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer