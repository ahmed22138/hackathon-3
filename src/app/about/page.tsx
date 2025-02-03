
import Image from "next/image";



export default function About(){
    return(
        <div>
            <div className="md:ml-36 md:mt-36">
              <Image src={'/images/Image (1).png'} alt={'pics'} width={600} height={700}  />
            </div>
            <div className="md:ml-[54vw] md:-mt-[30vw] md:w-[40vw]">
            <Image src={'/images/Line.png'} alt={'pics'} width={100} height={160}  />
            <h1 className="md:mt-5 md:font-bold md:text-5xl">Food is an important part of a Balanced Diet </h1>
            <p className="md:mt-5 md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam praesentium, aspernatur ullam ipsa quis sit tenetur minus deleniti, earum accusantium qui velit dolores alias sequi est porro totam inventore? Culpa!
            Mollitia tempore beatae incidunt laudantium quae tenetur pariatur, repudiandae molestiae iste! Alias natus dolore laudantium velit temporibus perferendis. Illo cum reiciendis accusamus unde? Natus, maxime sed. Facilis a eos assumenda?</p>
           <button className="md:w-44 md:h-10 md:bg-amber-500 md:mt-5 md:rounded-md">Show More</button>
                </div>
        </div>
    )
}