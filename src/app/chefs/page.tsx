"use client"


import Navbar from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { allChef } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Food } from "../../../types/food";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";



const Chefs =() => {
   
      const [chef , setFood] = useState<Food[]>([])
    
        useEffect (() => {
    
     async function fetchfood() {
    
        const fetchedFood : Food[] =await client.fetch(allChef)
        setFood(fetchedFood)
     }
     fetchfood()
    
        },[])
   
   

    return(

        <div>
       <Navbar/>

            <div className="hi12">
                              <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                              <h1> Our Blog</h1>
                              <h2>Home  &gt; <span>Chefs</span></h2>
                              </div>
           



       <div className='max-w-5xl mx-20 px-4 py-8 ml-60 '>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-6 gap-7'>

{
    chef.map((chef) => (
        <div key={chef._id}>
          <Link href={`/blog/${chef.slug.current}`}>
            {chef.image && (
                <Image
                src={urlFor(chef.image).url()}
                alt="image"
                width={200}
                height={200}
                className='w-full  object-cover rounded-md '
                />
            )}

         <h1 className='text-2xl'>{chef.name}</h1>
         <p className='w-48 py-1 text-lg '>{chef.description}</p>
     
</Link>
            </div>
    ))      
}
</div>
</div>
           
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

  <div>
            <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740}/>
            </div>


        </div>
     
    )
}

export default Chefs