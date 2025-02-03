"use client"

import Navbar from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allBlog } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Blog } from "../../../types/blog";



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
   
     
      <div className="md:mt-28 md:w-[50vw] ml-44">

     {
        blog.map((blog) => (
            <div key={blog._id} className="flex flex-col items-center justify-center">
                <div className="w-3/4">
                {
                    blog.image && (
                    <Image src={urlFor(blog.image).url()} alt="image" width={620} height={160} className="" />
                  )  }
                   
                </div>
                <div className="w-3/4 mt-4">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <p className="text-lg mt-2">{blog.description}</p>
                </div>
            </div>
        ))
     }
       
        </div>
        </div>




      </div>
  


 
    )
}
