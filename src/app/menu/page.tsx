
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io";
import Header from "@/components/header";


export default function Menu(){
    return(
        <div>
     
     <Header/>

       <div className="hi12">
       <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
       <h1> Our Menu</h1>
       <h2>Home  &gt; <span>Menu</span></h2>
       </div>


       <div>
      <Image src={'/images/,.png'} alt="//" width={448} height={626} className="mm"/>
        <Image src={'/images/Coffee (1).png'} alt=".." width={25} height={25} className="ttg"/>
        
         <h1 className="klq">Starter Menu</h1>
         <Image src={'/images/Component 49.png'} alt=",," width={760} height={111} className="ml"/>
         <Image src={'/images/Component 50.png'} alt=",," width={760} height={111} className="mt"/>
         <Image src={'/images/Component 51.png'} alt=",," width={760} height={111} className="mp"/>
         <Image src={'/images/Component 52.png'} alt=",," width={760} height={100} className="mb"/>
       </div>

        <div>
        <Image src={'/images/ml.png'} alt=",," width={448} height={626} className="j"/>
        <Image src={'/images/Coffee (1).png'} alt=".." width={25} height={25} className="tgr"/>
        
        <h1 className="r1">Main Course</h1>
        <Image src={'/images/Component 49 (2).png'} alt=",," width={750} height={111} className="ma"/>
        <Image src={'/images/Component 50 (2).png'} alt=",," width={750} height={111} className="mc"/>
        <Image src={'/images/Component 51 (2).png'} alt=",," width={750} height={111} className="md"/>
        <Image src={'/images/Component 52 (2).png'} alt=",," width={750} height={111} className="mz"/>

        <Image src={'/images/Client & customers.png'} alt='//' width={1920} height={410} className="mn" />
        </div>
          


          <div>
          <Image src={'/images/l.png'} alt=",," width={448} height={626} className="plp"/>
          <Image src={'/images/Coffee (1).png'} alt=".." width={25} height={25} className="tff"/>

          <h1 className="njm">Desert</h1>
        <Image src={'/images/23 (4).png'} alt=",," width={750} height={111} className="nx"/>
        <Image src={'/images/23 (1).png'} alt=",," width={750} height={111} className="nc"/>
        <Image src={'/images/23 (2).png'} alt=",," width={750} height={111} className="nv"/>
        <Image src={'/images/23 (3).png'} alt=",," width={750} height={111} className="nb"/>

          </div>
         

          <div>
          <Image src={'/images/k.png'} alt=",," width={448} height={626} className="a"/>
        <Image src={'/images/Coffee (1).png'} alt=".." width={25} height={25} className="b"/>
        
        <h1 className="r2">Drink</h1>
        <Image src={'/images/21 (4).png'} alt=",," width={750} height={111} className="za"/>
        <Image src={'/images/21 (3).png'} alt=",," width={750} height={111} className="zc"/>
        <Image src={'/images/21 (2).png'} alt=",," width={750} height={111} className="zd"/>
        <Image src={'/images/21 (1).png'} alt=",," width={750} height={111} className="zz"/>

     
          </div>
       


          <div className="hgs">
            <p>Partners & Clients</p>
            <h1>We work with the best people </h1>
            <Image src={'/images/Logo.png'} alt="/" width={1322} height={130} />
          </div>
           
           <div>
            <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className="tci"/>
            </div>
        </div>
    )
}

