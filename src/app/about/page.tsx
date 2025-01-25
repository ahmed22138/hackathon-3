"use client";


import { client } from "@/sanity/lib/client"
import { allChef } from "@/sanity/lib/queries"
import { useEffect, useState } from "react"
import { Chef } from "../../../types/food"
import Image from "next/image";
import { ImageResponse } from "next/server";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/nav";






const Chefs = () => {

    const [chef , setFood] = useState<Chef[]>([])

    useEffect (() => {

 async function fetchchef() {

    const fetchedChef : Chef[] =await client.fetch(allChef)
    setFood(fetchedChef)
 }
 fetchchef()

    },[])

    return(
        <div>
        
           <Navbar/>
              <div className="mtts">
        
               <Image src={'/images/dc.png'} alt="" width={1920} height={410}/>
              
                    <h1>Our Chefs</h1>
                    <h2>Home &gt; <span> Chefs </span></h2>
                    </div>
        

        <div className="max-w-5xl mx-auto px-20 py-16 ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-6 gap-10 ">

{
    chef.map((chef)=>(
        <div key={chef._id}>
            {chef.image &&
          <Image
          src={urlFor(chef.image).url()}
          alt="image"
          width={200}
          height={200}
          className="w-full"
          />
            }
         <h1 className="text-xl font-serif py-1">{chef.name}</h1>
         <p className="pb-6 ">{chef.description}</p>
        </div>

    ))
}



</div>
</div>


 <div>
            <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740}/>
            </div>

</div>



    )

}
export default Chefs