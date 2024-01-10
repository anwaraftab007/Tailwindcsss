import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-5xl capitalize font-bold lg:max-w-lg">We Provide You <span className="text-red-500"> Super </span><span className="text-red-500"> Quality </span>Shoes
        </h2>
        <p className="lg:max-w-lg font-monsterrat text-slate-800 text-lg text-wrap leading-7 mt-7 ">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="lg:max-w-lg font-monsterrat text-slate-800 text-lg text-wrap leading-7 mt-7 mb-4">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label='View details'/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality