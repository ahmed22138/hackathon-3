import Navbar from "@/components/nav";
import { client } from "@/sanity/lib/client";
import Chef from "@/sanity/schemaTypes/Chef";
import { groq } from "next-sanity";
import Image from "next/image";

interface IChefs {
    name: string;
    position: string;
    image: string;
    description: string;
    slug: string;
}

interface Props {
    params: {
        slug: string
    }
}


export default async function Chefs(){

    const Chefs:IChefs[] = await client.fetch(`
        *[_type == 'chef']{
        name,
    position,
         image,
    description,
      'slug':slug.current,
  
    
}[0]`)
   

    return(

        <div>
       <Navbar/>
      <div className="mtts">

       <Image src={'/images/dc.png'} alt="" width={1920} height={410}/>
      
            <h1>Our Chefs</h1>
            <h2>Home &gt; <span> Chefs </span></h2>
            </div>



      <div className="nlf">
        <div className="tsc1">
            <Image src={'/images/mix (12).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>feharmia</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (11).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Jorina Begum</h1>
            <p >Chef</p>
            </div>
        </div>
        
        <div className="tsc1">
            <Image src={'/images/mix (10).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>M.Mohammad</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (9).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Munna Kathy</h1>
            <p >Chef</p>
          
            </div>
        </div>
        </div>


       
       <div className="mnlc">
       <div className="tsc1">
            <Image src={'/images/mix (8).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Tehmina Rumi</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (7).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Bisnu devgon</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (6).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Motin Molladst</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (5).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>William Rumi</h1>
            <p >Chef</p>
            </div>
        </div>

        </div>

        <div className="kkla">

        <div className="tsc1">
            <Image src={'/images/mix (13).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Kets william roy</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (1).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Mahmud Kholil</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (2).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Ataur Rahman</h1>
            <p >Chef</p>
            </div>
        </div>

        <div className="tsc1">
            <Image src={'/images/mix (4).png'} alt="logo" width={600} height={200} className="h-[330px]" />
            <div className="dix">
            <h1>Monalisa holly</h1>
            <p >Chef</p>
            </div>
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