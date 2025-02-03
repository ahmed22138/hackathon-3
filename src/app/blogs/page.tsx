"use client"

import Navbar from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allBlog } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Blog } from "../../../types/blog";
import { IoSearchSharp } from "react-icons/io5";


export default function blog(){

   const [blog , setBlog] = useState<Blog[]>([])

 useEffect(() => {
   async function fetchedBlog (){
    const fetchedBlog : Blog[] = await client.fetch(allBlog)
    setBlog(fetchedBlog)
   }
   fetchedBlog()
    
  }, []);

    return(

    <div>
     
       <Navbar/>
                     
                       <div className="hi12">
                            <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                            <h1> Our Blog</h1>
                            <h2>Home  &gt; <span>Blog</span></h2>
                            </div>
    <div>
   
     <br/>
      <div className="md:mt-48 md:w-[50vw] md:ml-44  xs:ml-7   xs:w-64">

     {
        blog.map((blog) => (
            <div key={blog._id} className="flex flex-col items-center justify-center">
                <br/>
                <div className="w-3/4">
                {
                    blog.image && (
                    <Image src={urlFor(blog.image).url()} alt="image" width={620} height={160} className="" />
                  )  }
                   
                </div>
                <div className="md:w-3/4 mt-4">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <p className="text-lg mt-3">{blog.description}</p>
                    <button className="md:bg-amber-500 w-36 h-7 rounded-md mt-5 text-white xs:mt-2">Read More</button>
                 
                </div>
            </div>
        ))
     }
       
        </div>
        </div>
      
      <div>
        <div className="md:-mt-[160vw] md:ml-[35vw] md:w-80  xs:ml-7 xs:w-80">
            <input id="text" type="text"   
            placeholder="Search"
            className="md:w-64 md:h-10 md:ml-96 md:mt-20 md:rounded-md md:border-2 md:border-amber-500 md:pl-5"
            />
            <button className="md:absolute top-[37.3vw] md:ml-[41.6vw] md:bg-amber-500 md:w-16 md:h-10 md:rounded-md md:text-white md:text-2xl "><IoSearchSharp className="ml-4" /></button>
             <br/>


             <Image src={'/images/Prince Miyako (1).png'} alt="image" width={360} height={200} className="md:mt-2 md:ml-96" />
             
             <Image src={'/images/Recent Post (1).png'} alt="image" width={360} height={300} className="md:mt-2 md:ml-96" />

             <Image src={'/images/Filter by Menu (1).png'} alt="image" width={360} height={200} className="md:mt-2 md:ml-96" />

             <Image src={'/images/Popular Tag (1).png'} alt="image" width={360} height={200} className="md:mt-2 md:ml-96" />

             <Image src={'/images/Photo Gallery (1).png'} alt="image" width={360} height={200} className="md:mt-2 md:ml-96" />

             <Image src={'/images/Flollow us (1).png'} alt="image" width={360} height={200} className="md:mt-2 md:ml-96" />
        </div>
      </div>


  <div>
                <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className='md:mt-[50vw] xs:mt-32'/>
                </div>
     
</div>

 
    )
}
