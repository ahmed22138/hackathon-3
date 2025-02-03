"use client"

import Navbar from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allBlog } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Blog } from "../../../types/food";



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
   
     
      <div className="mt-80">

   {
    blog.map((blog) => (
      <div key={blog._id} className="blog">

{
    blog.image && (
      <div className="image">
        <Image src={urlFor(blog.image).url()} alt={blog.title} width={500} height={500} />
      </div>
    )  
}

      <h2>{blog.title}</h2>
        <p>{blog.description}</p>
      </div>
    ))
   }

       
        </div>
        </div>




      </div>
  


 
    )
}
