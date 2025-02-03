
import Image from "next/image";



export default function About(){
    return(
        <div>
            <div className="md:ml-36 md:mt-36">
              <Image src={'/images/Image (1).png'} alt={'pics'} width={600} height={700}  />
              <Image src={'/images/mlo.png'} alt={'pics'} width={1920} height={160} className="md:absolute top-[78vw] left-0" />
              <Image src={'/images/best chef.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-24" />
              <Image src={'/images/120 Item.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-[36vw]" />
              <Image src={'/images/Clean environment.png'} alt={'pics'} width={400} height={160} className="md:absolute top-[110vw] left-[65vw]" />
              <br/>
              <Image src={'/images/Bg.png'} alt={'pics'} width={1920} height={160} className="md:absolute top-[136vw] left-0" />
            
            </div>


             <br/>


            <div className="md:ml-[54vw] md:-mt-[36vw] md:w-[40vw]">
            <Image src={'/images/Line.png'} alt={'pics'} width={100} height={160}  />
            <h1 className="md:mt-5 md:font-bold md:text-5xl">Food is an important part of a Balanced Diet </h1>
            <p className="md:mt-5 md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam praesentium, aspernatur ullam ipsa quis sit tenetur minus deleniti, earum accusantium qui velit dolores alias sequi est porro totam inventore? Culpa!
            Mollitia tempore beatae incidunt laudantium quae tenetur pariatur, repudiandae molestiae iste! Alias natus dolore laudantium velit temporibus perferendis. Illo cum reiciendis accusamus unde? Natus, maxime sed. Facilis a eos assumenda?</p>
           <button className="md:w-44 md:h-10 md:bg-amber-500 md:mt-8 md:rounded-md">Show More</button>
           <Image src={'/images/Video Button.png'} alt={'pics'} width={100} height={160} className="md:ml-60 md:-mt-9 " />

             <h1 className="md:mt-80 md:-ml-52 md:text-5xl md:font-semibold">Why Choose us</h1>
             <p className="md:-ml-72 md:w-[35vw] md:mt-5 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero consectetur facilis, debitis aperiam, blanditiis dolorum fuga, nobis eius labore illum nisi .</p>
                </div>
        </div>
    )
}