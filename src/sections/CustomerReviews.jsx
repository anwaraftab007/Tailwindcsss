import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin text-5xl capitalize font-bold text-center">What Our<span className="text-red-500"> Customer </span>Say?
        </h2>
        <p className=" m-auto font-monsterrat text-slate-500 text-lg leading-7 mt-4 max-w-lg text-center ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard 
            key={review.customerName}
            imgUrl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews