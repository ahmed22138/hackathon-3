
import { Food } from "../../../../types/food";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/nav";
import { FiMinus, FiPlus } from "react-icons/fi";


interface FoodPageProps {
  params: Promise<{slug:string}>
}



async function getFood(slug:string): Promise<Food>{
  // Implement the logic to fetch the food item
  // For now, return null or a mock Food object
  return client.fetch(
    groq`*[_type == 'food' && slug.current == $slug][0]{
    _id,
    name,
    _type,
    image,
    price,
    description,
    originalPrice,
    }`, {slug}
  );
}

export default async function FoodPage({params}:FoodPageProps) {
  const {slug} = await params;
  const food = await getFood(slug);
  return (
  <div>
   <Navbar/>
   
    <div className="hi12">
                          <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                          <h1> Our Blog</h1>
                          <h2>Home  &gt; <span>Blog</span></h2>
                          </div>
       
       

   <div className="max-w-6xl mx-auto px-6 mt-60 mb-48">
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
   <div className="aspect-square">

    {food?.image &&
    <Image
    src={urlFor(food.image).url()}
    alt={food.name}
    width={500}
    height={500}
    className="w-full h-full object-cover rounded-xl"
    />
    }
    
   </div>
   <div className="flex flex-col gap-4 mt-20">
    <h1 className="text-4xl font-bold">
      {food?.name}
    </h1>
    <p className="text-2xl">
      {food?.description}
    </p>

    <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4.0 Reviews | 22 Reviews</span>
          </span>
    <p className="text-xl font-medium space-x-3">
    ${food?.price}   <s>${food?.originalPrice}</s>
    </p>
   
    <div className="flex gap-4 items-center">
      <h3>Quantity</h3>
      <p className="quantity-desc flex items-center border-black ring-2 ring-black space-x-3">
      <span className="minus">
        <FiMinus/>
      </span>

      <span className="num"> 0 </span>

      <span className="plus">
        <FiPlus/>
      </span>
      </p>

     
     </div>
     <button className="-ml-[0.5vw] mt-2 bg-black text-white w-40 h-16 rounded-xl ">Add to Card</button>
   </div>
   </div>
   </div>
    <div>
                   <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className='mt-20'/>
                   </div>
       
   </div>
  )
}