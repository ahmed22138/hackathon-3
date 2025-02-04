
import Navbar from "@/components/nav";
import Image from "next/image";



export default function About(){
    return(
    <div>
  
  <Navbar/>

            <div className="hi12">
                 <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                 <h1> Our Menu</h1>
                 <h2>Home  &gt; <span>Menu</span></h2>
                 </div>


        <div className="md:absolute top-96">
            <div className="md:ml-36 md:mt-36 xs:ml-5 xs:mt-28">
              <Image src={'/images/Image (1).png'} alt={'pics'} width={600} height={700} className="md:w-[40vw]  xs:w-[90vw] " />
              <Image src={'/images/mlo.png'} alt={'pics'} width={1920} height={160} className="md:absolute -top-[70vw] left-0 xs:-ml-4 md:ml-0 xs:mt-[150vw]" />
              <Image src={'/images/best chef.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-24 " />
              <Image src={'/images/120 Item.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-[36vw]" />
              <Image src={'/images/Clean environment.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-[65vw]" />
              <br/>
              <Image src={'/images/Mark Henry.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[65vw] left-20 xs:mt-[80vw]" />
              <Image src={'/images/Mark Henry (1).png'} alt={'pics'} width={400} height={160} className="md:absolute top-[145vw] left-[25vw]" />
              <Image src={'/images/Mark Henry (2).png'} alt={'pics'} width={400} height={160} className="md:absolute top-[145vw] left-[45vw]" />
              <Image src={'/images/Mark Henry (3).png'} alt={'pics'} width={400} height={160} className="md:absolute top-[145vw] left-[65vw]" />
              <br/>
              <Image src={'/images/Testimonials (2).png'} alt={'pics'} width={900} height={160} className="md:absolute top-[185vw] left-[20vw] xs:mt-[10vw]" />
              <Image src={'/images/Food Menu.png'} alt={'pics'} width={900} height={160} className="md:absolute top-[210vw] left-[22vw] xs:mt-[30vw] xs:-ml-3" /> 

            </div>
             <br/>


            <div className="md:ml-[54vw] md:-mt-[36vw] md:w-[40vw] xs:ml-4 xs:-mt-[990vw]">
            <Image src={'/images/Line.png'} alt={'pics'} width={100} height={160}   />
            <h1 className="md:mt-5 md:font-bold md:text-5xl xs:font-semibold xs:text-2xl xs:mt-5">Food is an important part of a Balanced Diet </h1>
            <p className="md:mt-5 md:text-xl xs:mt-4 xs:text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam praesentium, aspernatur ullam ipsa quis sit tenetur minus deleniti, earum accusantium qui velit dolores alias sequi est porro totam inventore? Culpa!
            Mollitia tempore beatae incidunt laudantium quae tenetur pariatur, repudiandae molestiae iste! Alias natus dolore laudantium velit temporibus perferendis. Illo cum reiciendis accusamus unde? Natus, maxime sed. Facilis a eos assumenda?</p>
           <button className="md:w-44 md:h-10 md:bg-amber-500 md:mt-8 md:rounded-md xs:bg-amber-500 xs:rounded-xl xs:w-28 xs:h-7 xs:mt-5 xs:text-white">Show More</button>
           <Image src={'/images/Video Button.png'} alt={'pics'} width={100} height={160} className="md:ml-60 md:-mt-9 xs:ml-32 xs:-mt-8" />
             <br/>
             <h1 className="md:mt-80 md:-ml-52 md:text-5xl md:font-semibold xs:text-2xl xs:font-semibold xs:ml-16 xs:mt-10">Why Choose us</h1>
             <p className="md:-ml-64 md:w-[35vw] md:mt-5 md:mb-8 xs:text-xs xs:mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero consectetur facilis, .</p>
             <br/>

             <h1 className="md:absolute -top-[96vw] md:-ml-52 md:text-5xl md:font-semibold md:text-white xs:mt-[232vw] xs:text-white">Team Member</h1>
             <p className="md:absolute top-[140vw] md:-ml-80 md:w-[35vw] md:mb-8 md:text-white xs:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus sapiente obcaecati similique eius accusantium veniam quo debitis.</p>
                </div>


                <Image src={'/images/Bg.png'} alt={'pics'} width={1920} height={260} className="md:mt-[50vw] xs:-mt-[24vw]" />

                    
                           <div>
                            <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className="md:mt-[140vw] xs:mt-[600vw]"/>
                            </div>
        </div>
        </div>
    )
}