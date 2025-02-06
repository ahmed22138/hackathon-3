"use client"

import  { useEffect, useState } from 'react'
import { Food } from '../../../types/food'
import { client } from '@/sanity/lib/client'
import { allProduct } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Navbar from '@/components/nav';
import Link from 'next/link'
import { addToCart } from '../actionButton/action'
import Swal from 'sweetalert2'
import { IoSearchSharp } from "react-icons/io5";
import Image from 'next/image'



const Shop = () => {

    const [food , setFood] = useState<Food[]>([])

    useEffect (() => {

 async function fetchfood() {

    const fetchedFood : Food[] =await client.fetch(allProduct)
    setFood(fetchedFood)
 }
 fetchfood()

    },[])


    const handleAddToCart = (e: React.MouseEvent, food: Food) => {
      e.preventDefault()
      Swal.fire({
          position: "top-right",
          icon: "success",
          title: `${food.name} add to cart`,
          showConfirmButton: false,
          timer: 1500
      })
  
  
      addToCart(food)
     }




  return (
    <div>

    <Navbar/>
                
                  <div className="hi12">
                       <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                       <h1> Our Shop</h1>
                       <h2>Home  &gt; <span>Shop</span></h2>
                       </div>
    
                       <div className="nixc">
                          
                       <div className='container'>
          <div className='dropdownGroup'>
            <label htmlFor="sort" className='label'>Sort By:</label>
            <select id="sort" className='dropdown'>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          <div className='dropdownGroup'>
            <label htmlFor="show" className='label'>Show:</label>
            <select id="show" className='dropdown'>
              <option value="default">Default</option>
              <option value="10">10 Items</option>
              <option value="20">20 Items</option>
            </select>
          </div>
        </div>
          </div>



    <div className='max-w-5xl mx-20 px-4 py-8 '>

        <h1 className='text-5xl font-serif'>Our Latest</h1>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-6 gap-7'>
 
        {
            food.map((food) => (
                <div key={food._id}>
                  <Link href={`/blog/${food.slug.current}`}>
                    {food.image && (
                        <Image
                        src={urlFor(food.image).url()}
                        alt="image"
                        width={200}
                        height={200}
                        className='w-full  object-cover rounded-md '
                        />
                    )}

                 <h1 className='text-2xl'>{food.name}</h1>
                 <p className='w-48 py-1 text-lg '>{food.description}</p>
                 <p className='text-lg'>${food.price}</p>
                 <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'
                onClick={(e) => handleAddToCart(e, food)}
                >
                Add To Cart
                </button>
      </Link>
                    </div>


            ))      
        }
    </div>


 
    </div>




    <div className='md:w-80 md:h-96  md:ml-[75vw]  md:-mt-[97vw] xs:ml-14 '>
      <input id='text' type='text' placeholder='Search' className='md:w-50 md:h-10  md:-mt-[5vw] md:rounded-md md:px-4 md:py-2 md:border md:border-gray-300 md:focus:outline-none md:focus:border-amber-500'   />
      <button className='md:bg-amber-500 md:h-10 md:w-10 md:rounded-lg md:text-2xl md:text-white md:absolute top-[43.3vw]'><IoSearchSharp className='ml-2' /></button>
            <div>

          <h1 className='md:ml-3 md:text-2xl md:mt-5 md:font-semibold  '>Category</h1>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Sandwiches</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Burger</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Chicken Chup</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Drink</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Pizza</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Thi</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Non Veg</label>
          <br/>
          <input type='checkbox' className='ml-3'/>
          <label className='ml-2'>Uncalegorized</label>
          <br/>

          <Image src={'/images/Banner (1).png'} alt='pic' width={250} height={100} className='md:mt-7'/>
          <br/>
          <Image src={'/images/Filter by Price.png'} alt='pic' width={240} height={100} />
          <br/>
          <Image src={'/images/Latest Product (1).png'} alt='pic' width={250} height={100} />
          <br />
          <Image src={'/images/Product Tag.png'} alt='pic' width={250} height={100} />
            </div>
           </div>






     <div>
                <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className='md:mt-[80vw] xs:mt-16'/>
                </div>
    
    </div>


  )
}


export default Shop
