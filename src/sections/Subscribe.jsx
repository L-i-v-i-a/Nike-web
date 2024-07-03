 import Button from '../Components/Button'
 const Subscribe = () => {
  return (
    <section className=" max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className=" text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up For
      <span className="text-sky-600"> Updates</span> & Newletters</h3>
      <div className=" lg:max-w-[40%] w-full flex item-center max-sm:flex-col gap-2 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@livvy.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="sign up" fullwidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
