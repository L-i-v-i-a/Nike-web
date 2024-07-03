import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from '../Components/Button'

const TrendingOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap 10 max-container">
          <div className="flex-1">
            <img src={offer} width={773} height={687} className=" object-contain w-full" />
    </div>
    <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-sky-600">Trending</span> offers
        </h1>
        <p className=" mt-4 lg:max-w-lg info-text">
          Our company delivers the best qaulity of shoes. We do not give our Customers a reason to complain. You can fully trust
          our company to provide you with the best of quaility.
        </p>
        <p className='mt-6 lg-max-w-lg info-text'>We have a motto which states that 
        WE ALWAYS DELIVER <br/> no matter what happens
        our customers come first. 
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="shop now" iconURl={arrowRight}/>
        <Button label="Learn More" 
        backgroundColor="bg-white"
        borderColor= "border-sky-600"
        textColor= "text-slate-gray" />
        </div>
    </div>
    </section>
  )
}

export default TrendingOffers
