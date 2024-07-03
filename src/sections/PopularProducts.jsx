import { products} from '../constants'
import PopularProductsCard from '../Components/PopularProductsCard'
const PopularProducts = () => {
  return (
    <section id="products" className="max-container-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className=' text-4xl font-palanquin font-bold'>Our <span className=' text-sky-600'>Popular</span> Products</h1>
        <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          We have the best shoes and they come in different types and sizes. You could pick your best fit at our store.
           </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
         {products.map((product) => (
            <PopularProductsCard key={products.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
