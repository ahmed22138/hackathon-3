"use client"

import  { useEffect, useState } from 'react'
import { Food } from '../../../types/food'
import { client } from '@/sanity/lib/client'
import { allProduct } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Navbar from '@/components/nav';
import Link from 'next/link'




const Shop = () => {

    const [food , setFood] = useState<Food[]>([])

    useEffect (() => {

 async function fetchfood() {

    const fetchedFood : Food[] =await client.fetch(allProduct)
    setFood(fetchedFood)
 }
 fetchfood()

    },[])

  return (
    <div>

    <Navbar/>
                
                  <div className="hi12">
                       <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                       <h1> Our Blog</h1>
                       <h2>Home  &gt; <span>Blog</span></h2>
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
                
      </Link>
                    </div>


            ))      
        }
    </div>


 
    </div>


     <div>
                <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className='mt-20'/>
                </div>
    
    </div>
  )
}

export default Shop
