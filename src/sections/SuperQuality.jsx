import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">we provide you
          <span className=" text-sky-600"> Super</span>
        <span className=" text-sky-600">Qaulity</span> Shoes
        </h1>
        <p className=" mt-4 lg:max-w-lg info-text">
          Our company delivers the best qaulity of shoes. We do not give our Customers a reason to complain. You can fully trust
          our company to provide you with the best of quaility.
        </p>
        <p className='mt-6 lg-max-w-lg info-text'>We have a motto which states that 
        WE ALWAYS DELIVER <br/> no matter what happens
        our customers come first. 
        </p>
        <div className='mt-11'>
        <Button label="view details"/>
        </div>
    </div>
    <div className='flex-1 justify-center items-center'>
      <img src={shoe8} alt="shoe8" width={570} height={522} className=' object-contain' />
    </div>
    </section>
  )
}

export default SuperQuality
